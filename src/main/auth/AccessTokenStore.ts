import AccessTokenData from './AccessTokenData';
import AuthAPI from './AuthAPI';
import EventEmitter = require('events');
import {CRUDEngine, InMemoryEngine} from '@wireapp/store-engine/dist/commonjs/engine';
import {ExpiredBundle, TransientBundle, TransientStore} from '@wireapp/store-engine/dist/commonjs/store';

export default class AccessTokenStore extends EventEmitter {
  private ACCESS_TOKEN_DATABASE: string = 'in-memory-database';
  private ACCESS_TOKEN_KEY: string = 'access-token';
  private ACCESS_TOKEN_TABLE: string = 'expiring-objects';

  private authAPI: AuthAPI;
  private tokenStore: TransientStore;

  public accessToken: AccessTokenData;

  public static TOPIC = {
    ACCESS_TOKEN_REFRESH: 'AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH',
  };

  constructor() {
    super();
    this.setupTokenStore();
  }

  private refreshAccessToken(expiredAccessToken?: AccessTokenData): Promise<AccessTokenData> {
    return this.authAPI.postAccess(expiredAccessToken);
  }

  private setupTokenStore(): void {
    const engine: CRUDEngine = new InMemoryEngine(this.ACCESS_TOKEN_DATABASE);
    this.tokenStore = new TransientStore(engine);
    this.tokenStore.on(TransientStore.TOPIC.EXPIRED, (expiredBundle: ExpiredBundle) => {
      const expiredAccessToken: AccessTokenData = expiredBundle.payload;
      this.refreshAccessToken(expiredAccessToken).then((accessToken: AccessTokenData) => this.updateToken(accessToken));
    });
  }

  public updateToken(accessToken: AccessTokenData): Promise<AccessTokenData> {
    const ttlInMillis = Math.max(accessToken.expires_in * 1000 - 20000, 10000);
    if (this.accessToken !== accessToken) {
      return this.tokenStore.set(this.ACCESS_TOKEN_KEY, accessToken, ttlInMillis).then(() => {
        this.accessToken = accessToken;
        this.emit(AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH, this.accessToken);
        return accessToken;
      });
    }
    return Promise.resolve(this.accessToken);
  }

  public init(authAPI: AuthAPI): Promise<AccessTokenData> {
    this.authAPI = authAPI;

    return this.tokenStore
      .init(this.ACCESS_TOKEN_TABLE)
      .then(() => this.tokenStore.get(this.ACCESS_TOKEN_KEY))
      .then((bundle: TransientBundle) => {
        if (bundle) {
          return bundle.payload;
        }
        return this.refreshAccessToken();
      })
      .then((accessToken: AccessTokenData) => (this.accessToken = accessToken));
  }

  public reset(): Promise<string> {
    this.accessToken = undefined;
    return this.tokenStore.delete(this.ACCESS_TOKEN_KEY);
  }
}

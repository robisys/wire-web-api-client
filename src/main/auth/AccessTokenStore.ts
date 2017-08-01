import AccessTokenData from './AccessTokenData';
import EventEmitter = require('events');
import {CRUDEngine, MemoryEngine} from '@wireapp/store-engine/dist/commonjs/engine';

export default class AccessTokenStore extends EventEmitter {
  private ACCESS_TOKEN_DATABASE: string = 'in-memory-database';
  private ACCESS_TOKEN_KEY: string = 'access-token';
  private ACCESS_TOKEN_TABLE: string = 'expiring-objects';

  private tokenStore: CRUDEngine;
  public accessToken: AccessTokenData;

  public static TOPIC = {
    ACCESS_TOKEN_REFRESH: 'AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH',
  };

  constructor() {
    super();
    this.tokenStore = new MemoryEngine(this.ACCESS_TOKEN_DATABASE);
  }

  public delete(): Promise<void> {
    return this.tokenStore
      .delete(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
      .then(() => (this.accessToken = undefined));
  }

  public updateToken(accessToken: AccessTokenData): Promise<AccessTokenData> {
    if (this.accessToken !== accessToken) {
      return this.tokenStore
        .delete(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
        .then(() => this.tokenStore.create(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY, this.accessToken))
        .then(() => (this.accessToken = accessToken));
    }
    return Promise.resolve(this.accessToken);
  }

  public init(): Promise<AccessTokenData> {
    return this.tokenStore
      .read(this.ACCESS_TOKEN_TABLE, this.ACCESS_TOKEN_KEY)
      .then((accessToken: AccessTokenData) => (this.accessToken = accessToken));
  }
}

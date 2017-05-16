import AccessToken from '../auth/AccessTokenData';
import AuthAPI from '../auth/AuthAPI';
import HttpClient from '../http/HttpClient';
import UserAPI from '../user/UserAPI';

export default class WireAPIClient {
  private CONNNECTION_URL: { REST: string, WebSocket: string } = {
    REST: undefined,
    WebSocket: undefined
  };

  public auth: { api: AuthAPI } = {
    api: undefined
  };

  public http: { client: HttpClient } = {
    client: undefined
  };

  public user: { api: UserAPI } = {
    api: undefined
  };

  constructor(public urls: { rest: string, ws?: string }) {
    this.CONNNECTION_URL.REST = urls.rest;
    this.CONNNECTION_URL.WebSocket = urls.ws;

    this.http.client = new HttpClient(this.CONNNECTION_URL.REST);

    this.auth.api = new AuthAPI(this.http.client);
    this.user.api = new UserAPI(this.http.client);
  }

  public login(data: LoginData): Promise<AccessToken> {
    return this.auth.api.postLogin(data)
      .then((accessToken: AccessToken) => {
        this.http.client.accessToken = accessToken;
        return accessToken;
      });
  }
}

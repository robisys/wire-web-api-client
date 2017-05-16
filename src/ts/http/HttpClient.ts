import AccessToken from '../auth/AccessTokenData';

export default class HttpClient {
  public accessToken: AccessToken;

  constructor(public baseURL: string) {
  }

  public createUrl(url: string) {
    return `${this.baseURL}${url}`;
  }
}

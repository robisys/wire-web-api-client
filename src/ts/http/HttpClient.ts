import axios, {AxiosRequestConfig} from 'axios';

import AccessToken from '../auth/AccessTokenData';
import ContentType from './ContentType';

export default class HttpClient {
  public accessToken: AccessToken;

  constructor(public baseURL: string) {
  }

  public createUrl(url: string) {
    return `${this.baseURL}${url}`;
  }

  public sendRequest(config: AxiosRequestConfig) {
    return axios.request(config);
  }

  public sendJSONRequest(config: AxiosRequestConfig, withAuthorization: boolean = true) {
    config.headers = config.headers || {};

    Object.assign(config.headers, {
      Authorization: `${this.accessToken.token_type} ${this.accessToken.access_token}`,
      'Content-Type': ContentType.APPLICATION_JSON
    });

    return this.sendRequest(config);
  }
}

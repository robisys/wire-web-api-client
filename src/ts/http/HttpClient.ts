import axios, {AxiosRequestConfig} from 'axios';

import AccessToken from '../auth/AccessTokenData';

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
}

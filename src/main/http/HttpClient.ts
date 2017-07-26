import axios, {AxiosPromise, AxiosRequestConfig} from 'axios';
import {AccessTokenStore} from '../auth';
import {ContentType} from '../http';

export default class HttpClient {
  private accessTokenStore: AccessTokenStore;
  private baseURL: string;

  constructor(baseURL: string, accessTokenStore: AccessTokenStore) {
    this.accessTokenStore = accessTokenStore;
    this.baseURL = baseURL;
  }

  public createUrl(url: string) {
    return `${this.baseURL}${url}`;
  }

  public sendRequest(config: AxiosRequestConfig, tokenAsParam: boolean = false): AxiosPromise {
    config.baseURL = this.baseURL;

    if (this.accessTokenStore.accessToken) {
      const {token_type, access_token} = this.accessTokenStore.accessToken;

      if (tokenAsParam) {
        config.params = {
          ...config.params,
          access_token,
        };
      } else {
        config.headers = {
          ...config.headers,
          Authorization: `${token_type} ${access_token}`,
        };
      }
    }

    return axios.request(config);
  }

  public sendJSONRequest(config: AxiosRequestConfig): AxiosPromise {
    config.headers = {
      ...config.headers,
      'Content-Type': ContentType.APPLICATION_JSON,
    };
    return this.sendRequest(config);
  }
}

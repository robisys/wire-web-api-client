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

  public sendRequest(config: AxiosRequestConfig): AxiosPromise {
    config.baseURL = this.baseURL;
    return axios.request(config);
  }

  public sendJSONRequest(config: AxiosRequestConfig): AxiosPromise {
    config.headers = config.headers || {};

    Object.assign(config.headers, {
      'Content-Type': ContentType.APPLICATION_JSON,
    });

    if (this.accessTokenStore.accessToken) {
      config.headers.Authorization = `${this.accessTokenStore.accessToken.token_type} ${this.accessTokenStore
        .accessToken.access_token}`;
    }

    return this.sendRequest(config);
  }
}

import AccessTokenData from '../auth/AccessTokenData';
import axios, {AxiosError, AxiosPromise, AxiosRequestConfig} from 'axios';
import {AccessTokenStore} from '../auth';
import {AuthAPI} from '../auth';
import {ContentType} from '../http';
import PriorityQueue from '@wireapp/queue-priority/dist/commonjs/PriorityQueue';

export default class HttpClient {
  private _authAPI: AuthAPI;
  private requestQueue: PriorityQueue<number>;

  constructor(private baseURL: string, private accessTokenStore: AccessTokenStore) {
    this.requestQueue = new PriorityQueue({
      maxRetries: 0,
      retryDelay: 1000,
    });
  }

  set authAPI(authAPI: AuthAPI) {
    this._authAPI = authAPI;
  }

  public createUrl(url: string) {
    return `${this.baseURL}${url}`;
  }

  public _sendRequest(config: AxiosRequestConfig, tokenAsParam: boolean = false): AxiosPromise {
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

    return axios.request(config).catch((error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        let expiredAccessToken: AccessTokenData = undefined;
        if (this.accessTokenStore.accessToken && this.accessTokenStore.accessToken.access_token) {
          expiredAccessToken = this.accessTokenStore.accessToken;
        }
        return this.accessTokenStore
          .delete()
          .then(() => this._authAPI.postAccess(expiredAccessToken))
          .then((accessToken: AccessTokenData) => this.accessTokenStore.updateToken(accessToken))
          .then(() => this._sendRequest(config, tokenAsParam));
      }

      return Promise.reject(error);
    });
  }

  public sendRequest(config: AxiosRequestConfig, tokenAsParam: boolean = false): AxiosPromise {
    return this.requestQueue.add(() => this._sendRequest(config, tokenAsParam));
  }

  public sendJSONRequest(config: AxiosRequestConfig): AxiosPromise {
    config.headers = {
      ...config.headers,
      'Content-Type': ContentType.APPLICATION_JSON,
    };
    return this.sendRequest(config);
  }
}

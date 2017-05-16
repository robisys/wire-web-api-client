import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import ContentType from '../http/ContentType';
import HttpClient from '../http/HttpClient';
import UserData from "./UserData";

export default class UserAPI {
  constructor(private client: HttpClient) {
  }

  static get URL() {
    return {
      CONNECTIONS: '/connections',
      PROPERTIES: '/properties',
      SELF: '/self',
      USERS: '/users'
    };
  }

  public getSelf(): Promise<UserData> {
    const config: AxiosRequestConfig = {
      baseURL: this.client.baseURL,
      headers: {
        Authorization: `${this.client.accessToken.token_type} ${this.client.accessToken.access_token}`,
        'Content-Type': ContentType.APPLICATION_JSON,
      },
      method: 'get',
      url: UserAPI.URL.SELF
    };

    return this.client.sendRequest(config).then((response: AxiosResponse) => new UserData(response.data));
  }
}

import {AxiosRequestConfig, AxiosResponse} from 'axios';

import HttpClient from '../http/HttpClient';

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
      method: 'get',
      url: UserAPI.URL.SELF
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }
}

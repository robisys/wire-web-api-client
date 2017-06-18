/// <reference path="UserData.ts"/>
import {AxiosRequestConfig, AxiosResponse} from 'axios';

import HttpClient from '../http/HttpClient';
import UserData from './UserData';

export default class UserAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      CONNECTIONS: '/connections',
      PROPERTIES: '/properties',
      SELF: '/self',
      USERS: '/users',
    };
  }

  public getSelf(): Promise<UserData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: UserAPI.URL.SELF,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public getUsers(parameters: { handles?: string[]; ids?: string[] }): Promise<UserData[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: UserAPI.URL.USERS,
    };

    if (parameters.handles) {
      config.url += `?handles=${parameters.handles.join(',')}`;
    }

    if (parameters.ids) {
      config.url += `?ids=${parameters.ids.join(',')}`;
    }

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}

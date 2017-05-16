import axios, {AxiosInstance, AxiosPromise} from 'axios';

import ContentType from '../http/ContentType';
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

  public getSelf(): AxiosPromise {
    const url: string = UserAPI.URL.SELF;

    const instance: AxiosInstance = axios.create({
      baseURL: this.client.baseURL,
      headers: {
        Authorization: `${this.client.accessToken.token_type} ${this.client.accessToken.access_token}`,
        'Content-Type': ContentType.APPLICATION_JSON,
      }
    });

    return instance.get(url);
  }
}

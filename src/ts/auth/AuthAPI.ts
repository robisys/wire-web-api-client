import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import HttpClient from '../http/HttpClient';

export default class AuthAPI {
  constructor(private client: HttpClient) {
  }

  static get URL() {
    return {
      ACCESS: '/access',
      ACTIVATE: '/activate',
      COOKIES: '/cookies',
      INVITATIONS: '/invitations',
      LOGIN: '/login',
      REGISTER: '/register'
    };
  }

  postCookiesRemove(login: LoginData, labels?: string[]): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        email: login.email,
        labels: labels,
        password: login.password.toString()
      },
      method: 'post',
      url: `${AuthAPI.URL.COOKIES}/remove`
    };

    return this.client.sendRequest(config);
  }

  public postLogin(login: LoginData): Promise<AccessTokenData> {
    const config: AxiosRequestConfig = {
      data: {
        email: login.email,
        password: login.password.toString()
      },
      headers: {
        withCredentials: true
      },
      method: 'post',
      url: `${AuthAPI.URL.LOGIN}?persist=${login.persist}`
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }
}

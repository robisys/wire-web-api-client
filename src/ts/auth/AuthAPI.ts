/// <reference path="AccessTokenData.ts"/>
/// <reference path="LoginData.ts"/>
import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import HttpClient from '../http/HttpClient';

export default class AuthAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      ACCESS: '/access',
      ACTIVATE: '/activate',
      COOKIES: '/cookies',
      INVITATIONS: '/invitations',
      LOGIN: '/login',
      LOGOUT: 'logout',
      REGISTER: '/register',
    };
  }

  public postCookiesRemove(login: LoginData, labels?: string[]): AxiosPromise {
    const config: AxiosRequestConfig = {
      data: {
        labels: labels,
        password: login.password.toString(),
      },
      method: 'post',
      url: `${AuthAPI.URL.COOKIES}/remove`,
    };

    return this.client.sendRequest(config);
  }

  public postLogin(login: LoginData): Promise<AccessTokenData> {
    login.password = login.password.toString();
    const config: AxiosRequestConfig = {
      data: login,
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.LOGIN}?persist=${login.persist}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public postLogout(): AxiosPromise {
    const config: AxiosRequestConfig = {
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.ACCESS}/${AuthAPI.URL.LOGOUT}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }

  public postAccess(): Promise<AccessTokenData> {
    const config: AxiosRequestConfig = {
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.ACCESS}`,
    };

    return this.client
      .sendJSONRequest(config)
      .then((response: AxiosResponse) => {
        return response.data;
      });
  }
}

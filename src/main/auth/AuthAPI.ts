import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from 'axios';

import {AccessTokenData, LoginData} from '../auth';
import {HttpClient} from '../http';
import UserData from '../user/UserData';
import RegisterData from './RegisterData';

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

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }

  public postLogout(): AxiosPromise {
    const config: AxiosRequestConfig = {
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.ACCESS}/${AuthAPI.URL.LOGOUT}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }

  public postAccess(expiredAccessToken?: AccessTokenData): Promise<AccessTokenData> {
    const config: AxiosRequestConfig = {
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.ACCESS}`,
    };

    if (expiredAccessToken) {
      config.headers = {
        Authorization: `${expiredAccessToken.token_type} ${decodeURIComponent(expiredAccessToken.access_token)}`,
      };
    }

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }

  public postRegister(register: RegisterData, challengeCookie: boolean = true): Promise<UserData> {
    const config: AxiosRequestConfig = {
      data: register,
      withCredentials: true,
      method: 'post',
      url: `${AuthAPI.URL.REGISTER}?challenge_cookie=${challengeCookie}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }
}

import axios, {AxiosError, AxiosInstance, AxiosPromise, AxiosResponse} from 'axios';

import AccessToken from './AccessTokenData';
import ContentType from '../http/ContentType';
import HttpClient from '../http/HttpClient';
import StatusCode from '../http/StatusCode';

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

  public postLogin(login: LoginData): Promise<AccessToken> {
    const url: string = `${AuthAPI.URL.LOGIN}?persist=${login.persist}`;

    const instance: AxiosInstance = axios.create({
      baseURL: this.client.baseURL,
      headers: {
        'Content-Type': ContentType.APPLICATION_JSON,
        withCredentials: true
      }
    });

    return instance.post(url, {
      email: login.email,
      password: login.password + '', // Safety net if someone enters only numbers
    }).then(function (response: AxiosResponse) {
      const token: AccessToken = new AccessToken(response.data);
      return token;
    }).catch((error: AxiosError) => {
      if (error.response.status === StatusCode.TOO_MANY_REQUESTS && login.email) {
        // Backend blocked our user account from login, so we have to reset our cookies
        return this.postCookiesRemove(login).then(() => this.postLogin(login));
      } else {
        throw error;
      }
    });
  }

  postCookiesRemove(login: LoginData, labels?: string[]): AxiosPromise {
    const url = this.client.createUrl(`${AuthAPI.URL.COOKIES}/remove`);

    return axios.post(url, {
      email: login.email,
      labels: labels,
      password: login.password,
    });
  }
}

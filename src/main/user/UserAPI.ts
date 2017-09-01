import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {HttpClient} from '../http';
import {UserClientPreKeyMap, UserClientMap, UserData, SearchableData} from '../user';

export default class UserAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      PRE_KEYS: 'prekeys',
      SEARCHABLE: 'searchable',
      SELF: '/self',
      USERS: '/users',
    };
  }

  public getPreKeys(userClientMap: UserClientMap): Promise<UserClientPreKeyMap> {
    const config: AxiosRequestConfig = {
      data: userClientMap,
      method: 'post',
      url: `${UserAPI.URL.USERS}/${UserAPI.URL.PRE_KEYS}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public getSelf(): Promise<UserData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: UserAPI.URL.SELF,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public putSearchable(data: SearchableData): Promise<void> {
    const config: AxiosRequestConfig = {
      data,
      method: 'put',
      url: `${UserAPI.URL.SELF}/${UserAPI.URL.SEARCHABLE}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => {
      return response.data;
    });
  }

  public getSearchable(): Promise<SearchableData> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.SELF}/${UserAPI.URL.SEARCHABLE}`,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }

  public getUsers(parameters: {handles?: string[]; ids?: string[]}): Promise<UserData[]> {
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

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }
}

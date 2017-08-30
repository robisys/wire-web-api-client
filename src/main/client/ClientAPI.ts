import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {HttpClient} from '../http';
import {NewClient, RegisteredClient} from '../user';

export default class ClientAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      CLIENTS: '/clients',
    };
  }

  public postClients(data: NewClient): Promise<RegisteredClient> {
    const config: AxiosRequestConfig = {
      data,
      method: 'post',
      url: ClientAPI.URL.CLIENTS,
    };

    return this.client.sendJSONRequest(config).then((response: AxiosResponse) => response.data);
  }
}

import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {HttpClient} from '../http';
import {NewClient, RegisteredClient} from '../client/';
import {PreKeyBundle} from '../auth';

export default class ClientAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      CLIENTS: '/clients',
      PRE_KEYS: 'prekeys',
    };
  }

  /**
   * Register a new client.
   * @param newClientData The new client
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/registerClient
   */
  public postClient(newClientData: NewClient): Promise<RegisteredClient> {
    const config: AxiosRequestConfig = {
      data: newClientData,
      method: 'post',
      url: ClientAPI.URL.CLIENTS,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Delete an existing client.
   * @param clientId The client to delete
   * @param password The password of the authenticated user
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/deleteClient
   */
  public deleteClient(clientId: string, password?: string): Promise<{}> {
    const config: AxiosRequestConfig = {
      data: {
        password,
      },
      method: 'delete',
      url: `${ClientAPI.URL.CLIENTS}/${clientId}`,
    };

    return this.client.sendJSON(config).then(() => ({}));
  }

  /**
   * Get a registered client by ID.
   * @param clientId The client's ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getClients
   */
  public getClient(clientId: string): Promise<RegisteredClient> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${ClientAPI.URL.CLIENTS}/${clientId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * List the registered clients.
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/listClients
   */
  public getClients(): Promise<RegisteredClient[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: ClientAPI.URL.CLIENTS,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * List the remaining prekey IDs of a client.
   * @param clientId The client's ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/listPrekeyIds
   */
  public getClientPreKeys(clientId: string): Promise<PreKeyBundle> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${ClientAPI.URL.CLIENTS}/${clientId}/${ClientAPI.URL.PRE_KEYS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }
}

import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {HttpClient} from '../http';
import {ClientPreKey, PreKeyBundle} from '../auth';
import {PublicClient} from '../client';
import {
  CheckHandles,
  HandleInfo,
  UserClientPreKeyMap,
  UserClientMap,
  User,
  UserPreKeyBundleMap,
  VerifyDelete,
} from '../user';

export default class UserAPI {
  constructor(private client: HttpClient) {}

  static get URL() {
    return {
      CLIENTS: 'clients',
      DELETE: '/delete',
      HANDLES: 'handles',
      PRE_KEYS: 'prekeys',
      USERS: '/users',
    };
  }

  /**
   * Get a specific client of a user.
   * @param userId The user ID
   * @param clientId The client ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getUserClient
   */
  public getClient(userId: string, clientId: string): Promise<PublicClient> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${userId}/${UserAPI.URL.CLIENTS}/${clientId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get a prekey for a specific client of a user.
   * @param userId The user ID
   * @param clientId The client ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getPrekey
   */
  public getClientPreKey(userId: string, clientId: string): Promise<ClientPreKey> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${userId}/${UserAPI.URL.PRE_KEYS}/${clientId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get all of a user's clients.
   * @param userId The user ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getUserClients
   */
  public getClients(userId: string): Promise<PublicClient[]> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${userId}/${UserAPI.URL.CLIENTS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get information on a user handle.
   * @param handle The user's handle
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getUserHandleInfo
   */
  public getHandle(handle: string): Promise<HandleInfo> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${UserAPI.URL.HANDLES}/${handle}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Given a map of user IDs to client IDs return a prekey for each one.
   * Note: The maximum map size is 128 entries.
   * @param userClientMap A map of the user's clients
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/getMultiPrekeyBundles
   */
  public getMultiPreKeyBundles(userClientMap: UserClientMap): Promise<UserPreKeyBundleMap> {
    const config: AxiosRequestConfig = {
      data: userClientMap,
      method: 'post',
      url: `${UserAPI.URL.USERS}/${UserAPI.URL.PRE_KEYS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get a user by ID.
   * @param userId The user ID
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/user
   */
  public getUser(userId: string): Promise<User> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${userId}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Get a prekey for each client of a user.
   * @param userId
   */
  public getUserPreKeys(userId: string): Promise<PreKeyBundle> {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${UserAPI.URL.USERS}/${userId}/${UserAPI.URL.PRE_KEYS}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * List users.
   * Note: The 'ids' and 'handles' parameters are mutually exclusive.
   * @param parameters Multiple user's handles or IDs
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/users
   */
  public getUsers(parameters: {handles?: string[]; ids?: string[]}): Promise<User[]> {
    const config: AxiosRequestConfig = {
      params: {},
      method: 'get',
      url: UserAPI.URL.USERS,
    };

    if (parameters.handles) {
      config.params.handles = parameters.handles.join(',');
    } else if (parameters.ids) {
      config.params.ids = parameters.ids.join(',');
    }

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }

  /**
   * Verify account deletion with a code.
   * @param verificationData Data to verify the account deletion
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/verifyDeleteUser
   */
  public postDelete(verificationData: VerifyDelete): Promise<{}> {
    const config: AxiosRequestConfig = {
      data: verificationData,
      method: 'post',
      url: UserAPI.URL.DELETE,
    };

    return this.client.sendJSON(config).then(() => ({}));
  }

  /**
   * Check availability of user handles.
   * @param handles The handles to check
   * @see https://staging-nginz-https.zinfra.io/swagger-ui/#!/users/checkUserHandles
   */
  public postHandles(handles: CheckHandles): Promise<string[]> {
    const config: AxiosRequestConfig = {
      data: handles,
      method: 'post',
      url: `${UserAPI.URL.USERS}/${UserAPI.URL.HANDLES}`,
    };

    return this.client.sendJSON(config).then((response: AxiosResponse) => response.data);
  }
}

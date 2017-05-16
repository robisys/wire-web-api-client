import * as WebSocket from 'ws';
import EventEmitter = require("events");

import AuthAPI from '../auth/AuthAPI';
import HttpClient from '../http/HttpClient';
import UserAPI from '../user/UserAPI';

export default class WireAPIClient extends EventEmitter {
  private CONNNECTION_URL: { REST: string, WebSocket: string } = {
    REST: undefined,
    WebSocket: undefined
  };

  public auth: { api: AuthAPI } = {
    api: undefined
  };

  public http: { client: HttpClient } = {
    client: undefined
  };

  public user: { api: UserAPI } = {
    api: undefined
  };

  public static TOPIC = {
    WEB_SOCKET_MESSAGE: 'WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE'
  };

  constructor(public urls: { rest: string, ws?: string }) {
    super();

    this.CONNNECTION_URL.REST = urls.rest;
    this.CONNNECTION_URL.WebSocket = urls.ws;

    this.http.client = new HttpClient(this.CONNNECTION_URL.REST);

    this.auth.api = new AuthAPI(this.http.client);
    this.user.api = new UserAPI(this.http.client);
  }

  public connectToWebSocket(accessToken: string): Promise<WebSocket> {
    const url = `${this.CONNNECTION_URL.WebSocket}/await?access_token=${accessToken}`;

    const socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';

    return new Promise((resolve) => {
      socket.on('message', function message(data) {
        this.emit(WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE, data);
      });

      socket.on('open', function open() {
        resolve(socket);
      });
    });
  }

  public login(data: LoginData, shouldConnectToSocket: boolean): Promise<AccessTokenData> {
    return this.auth.api.postLogin(data)
      .then((accessToken: AccessTokenData) => {
        this.http.client.accessToken = accessToken;
        if (shouldConnectToSocket) {
          this.connectToWebSocket(accessToken.access_token);
        }
        return accessToken;
      });
  }
}

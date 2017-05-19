import * as WebSocket from 'ws';
import EventEmitter = require('events');

import AuthAPI from '../auth/AuthAPI';
import HttpClient from '../http/HttpClient';
import UserAPI from '../user/UserAPI';
import WebSocketClient from '../tcp/WebSocketClient';

export default class WireAPIClient extends EventEmitter {
  public auth: { api: AuthAPI } = {
    api: undefined
  };

  public client: { http: HttpClient, ws: WebSocketClient } = {
    http: undefined,
    ws: undefined
  };

  public user: { api: UserAPI } = {
    api: undefined
  };

  public static TOPIC = {
    WEB_SOCKET_MESSAGE: 'WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE'
  };

  constructor(public urls: { rest: string, ws?: string }) {
    super();

    this.client.http = new HttpClient(urls.rest);
    this.client.ws = new WebSocketClient(urls.ws);

    this.auth.api = new AuthAPI(this.client.http);
    this.user.api = new UserAPI(this.client.http);
  }

  public login(data: LoginData): Promise<AccessTokenData> {
    return this.auth.api.postLogin(data)
      .then((accessToken: AccessTokenData) => {
        this.client.http.accessToken = accessToken;
        this.client.ws.accessToken = this.client.http.accessToken;
        return accessToken;
      });
  }

  public listen(clientId: string): Promise<WebSocket> {
    return this.client.ws.connect(clientId)
      .then((socket: WebSocket) => {
        socket.on('message', (data: ArrayBuffer) => {
          const notification = JSON.parse(Buffer.from(data).toString('utf8'));
          this.emit(WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE, notification);
        });
        return socket;
      });
  }
}

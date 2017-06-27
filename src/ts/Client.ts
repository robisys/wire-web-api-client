import * as WebSocket from 'ws';
import EventEmitter = require('events');

import {AccessTokenData, AuthAPI, Context, LoginData} from './auth';
import {Backend} from './env';
import {HttpClient} from './http';
import {TeamAPI} from './team';
import {UserAPI, UserData} from  './user';
import {WebSocketClient} from './tcp';
const buffer = require('./util/buffer');

class Client extends EventEmitter {
  public auth: { api: AuthAPI } = {
    api: undefined,
  };

  public client: { http: HttpClient; ws: WebSocketClient } = {
    http: undefined,
    ws: undefined,
  };

  public context: Context = undefined;

  public user: { api: UserAPI } = {
    api: undefined,
  };

  public team: { api: TeamAPI } = {
    api: undefined,
  };

  public static TOPIC = {
    WEB_SOCKET_MESSAGE: 'Client.TOPIC.WEB_SOCKET_MESSAGE',
  };

  public static BACKEND = Backend;

  constructor(public urls: { rest: string; ws?: string, name?: string } = Client.BACKEND.PRODUCTION) {
    super();

    this.client.http = new HttpClient(urls.rest);
    this.client.ws = new WebSocketClient(urls.ws);

    this.auth.api = new AuthAPI(this.client.http);
    this.user.api = new UserAPI(this.client.http);
    this.team.api = new TeamAPI(this.client.http);
  }

  public init(): Promise<Context> {
    return this.refreshAccessToken()
      .then(() => this.user.api.getSelf())
      .then((userData: UserData) => this.createContext(userData));
  }

  public login(data: LoginData): Promise<Context> {
    return this.auth.api
      .postLogin(data)
      .then((accessToken: AccessTokenData) => {
        this.client.http.accessToken = accessToken;
        this.client.ws.accessToken = this.client.http.accessToken;

        return this.user.api.getSelf();
      })
      .then((userData: UserData) => this.createContext(userData));
  }

  public logout(): Promise<void> {
    return this.auth.api
      .postLogout()
      .then(() => this.disconnect())
      .then(() => {
        this.client.http.accessToken = undefined;
        this.client.ws.accessToken = undefined;
        this.context = undefined;
      })
  }

  public refreshAccessToken(): Promise<AccessTokenData> {
    return this.auth.api.postAccess()
      .then((accessToken: AccessTokenData) => {
        this.client.http.accessToken = accessToken;
        this.client.ws.accessToken = this.client.http.accessToken;
        return accessToken;
      });
  }

  public connect(): Promise<void> {
    return this.client.ws.connect(this.context.clientID)
      .then((socket: WebSocket) => {
        socket.onmessage = (event: {data: WebSocket.Data; type: string; target: WebSocket}) => {
          const notification = JSON.parse(buffer.bufferToString(event.data));
          this.emit(Client.TOPIC.WEB_SOCKET_MESSAGE, notification);
        };
      });
  }

  private createContext(userData: UserData): Context {
    if (this.context) {
      throw new Error(`There is already a context with user ID '${this.context.userID}'.`);
    }

    this.context = new Context(userData.id);
    return this.context;
  }

  public disconnect(): void {
    this.client.ws.disconnect();
  }
}

export = Client;

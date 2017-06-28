const Html5WebSocket = require('html5-websocket');
const ReconnectingWebsocket = require('reconnecting-websocket');

import {AccessTokenData} from '../auth';

export default class WebSocketClient {
  public accessToken: AccessTokenData;
  private socket: WebSocket;

  constructor(public baseURL: string) {}

  public connect(clientId?: string): Promise<WebSocket> {
    let url = `${this.baseURL}/await?access_token=${this.accessToken.access_token}`;

    if (clientId) {
      url += `&client=${clientId}`;
    }

    const reconnectingOptions = {
      connectionTimeout: 4000,
      constructor: (typeof window !== 'undefined') ? WebSocket : Html5WebSocket,
      debug: false,
      maxReconnectionDelay: 2000,
      maxRetries: Infinity,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.0,
    };
    this.socket = new ReconnectingWebsocket(url, undefined, reconnectingOptions);
    this.socket.binaryType = 'arraybuffer';

    return new Promise((resolve) => {
      this.socket.onopen = () => {
        resolve(this.socket);
      };
    });
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = undefined;
    } else {
      throw new Error('Attempt for closing non-existent WebSocket.');
    }
  }
}

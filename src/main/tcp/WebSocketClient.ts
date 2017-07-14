import {AccessTokenStore} from '../auth';

const Html5WebSocket = require('html5-websocket');
const ReconnectingWebsocket = require('reconnecting-websocket');

export default class WebSocketClient {
  private socket: WebSocket;

  constructor(private baseURL: string, private accessTokenStore: AccessTokenStore) {}

  public connect(clientId?: string): Promise<WebSocket> {
    const PING_INTERVAL = 30000;
    let url = `${this.baseURL}/await?access_token=${this.accessTokenStore.accessToken.access_token}`;

    if (clientId) {
      url += `&client=${clientId}`;
    }

    const reconnectingOptions = {
      connectionTimeout: 4000,
      constructor: typeof window !== 'undefined' ? WebSocket : Html5WebSocket,
      debug: false,
      maxReconnectionDelay: 30000,
      maxRetries: Infinity,
      minReconnectionDelay: 4000,
      reconnectionDelayGrowFactor: 1.3,
    };
    this.socket = new ReconnectingWebsocket(url, undefined, reconnectingOptions);
    this.socket.binaryType = 'arraybuffer';

    return new Promise(resolve => {
      this.socket.onopen = () => {
        let pinger: number | NodeJS.Timer = setInterval(() => {
          this.socket.send('Wire is so much nicer with Internet!');
        }, PING_INTERVAL);

        this.socket.onclose = () => {
          clearInterval(<number>pinger);
        };

        resolve(this.socket);
      };
    });
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = undefined;
    }
  }
}

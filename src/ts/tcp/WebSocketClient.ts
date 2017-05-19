import * as WebSocket from 'ws';
import EventEmitter = require('events');

export default class WebSocketClient extends EventEmitter {
  public accessToken: AccessTokenData;

  constructor(public baseURL: string) {
    super();
  }

  public connect(clientId?: string): Promise<WebSocket> {
    let url = `${this.baseURL}/await?access_token=${this.accessToken.access_token}`;
    if (clientId) {
      url += `&client=${clientId}`;
    }

    const socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';

    return new Promise((resolve) => {
      socket.on('open', function open() {
        resolve(socket);
      });
    });
  }
}

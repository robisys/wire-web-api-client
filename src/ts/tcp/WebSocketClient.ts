import * as WebSocket from 'ws';

export default class WebSocketClient {
  public accessToken: AccessTokenData;
  private socket: WebSocket;

  constructor(public baseURL: string) {}

  public connect(clientId?: string): Promise<WebSocket> {
    let url = `${this.baseURL}/await?access_token=${this.accessToken.access_token}`;

    if (clientId) {
      url += `&client=${clientId}`;
    }

    this.socket = new WebSocket(url);
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

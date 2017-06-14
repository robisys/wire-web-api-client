import * as WebSocket from 'ws';

export default class WebSocketClient {
  public accessToken: AccessTokenData;

  constructor(public baseURL: string) {}

  public connect(clientId?: string): Promise<WebSocket> {
    let url = `${this.baseURL}/await?access_token=${this.accessToken
      .access_token}`;
    if (clientId) {
      url += `&client=${clientId}`;
    }

    const socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';

    return new Promise((resolve) => {
      socket.onopen = () => {
        resolve(socket);
      };
    });
  }
}

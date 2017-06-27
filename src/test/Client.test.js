import Client from "../../dist/commonjs/Client";
import Context from "../../dist/commonjs/auth/Context";

describe('Client', () => {
  it('processes WebSocket messages when executed in a web browser', (done) => {
    const apiClient = new Client(Client.BACKEND.STAGING);
    const accessToken = 'something';
    const dataBuffer = new TextEncoder('utf-8').encode('{}').buffer;
    const message = new MessageEvent('message', {data: dataBuffer});
    apiClient.context = new Context('userID', undefined);
    apiClient.client.http.accessToken = accessToken;
    apiClient.client.ws.accessToken = accessToken;
    const promise = apiClient.connect();
    apiClient.client.ws.socket.onopen(message);
    promise.then((socket) => {
      apiClient.client.ws.socket.onmessage(message);
    }).then(() => {
      done();
    }).catch((error) => {
      expect(error).toBeUndefined();
    });
  });
});

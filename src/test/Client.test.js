import Client from "../../dist/commonjs/Client";

describe('Client', () => {
  it('processes WebSocket messages when executed in a web browser', (done) => {
    const client = new Client(Client.BACKEND.STAGING);
    const accessToken = 'something';
    const dataBuffer = new TextEncoder("utf-8").encode("{}").buffer;
    const message = new MessageEvent('message', {data: dataBuffer});
    client.client.http.accessToken = accessToken;
    client.client.ws.accessToken = accessToken;
    const promise = client.connect();
    client.client.ws.socket.onopen(message);
    promise.then((socket) => {
      client.client.ws.socket.onmessage(message);
    }).then(() => {
      done();
    }).catch((error) => {
      expect(error).toBeUndefined();
    });
  });
});

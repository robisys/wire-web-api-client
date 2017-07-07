const WebSocketClient = require('../dist/commonjs/tcp/WebSocketClient').default;
const WebSocketServer = require('ws').Server;
const {AccessTokenStore} = require('../dist/commonjs/auth');

const WEB_SOCKET_PORT = 8087;
let server = undefined;

function startServer() {
  server = new WebSocketServer({port: WEB_SOCKET_PORT});
}

function stopServer() {
  if (server) {
    server.close();
    server = undefined;
  }
}

describe('WebSocketClient', () => {
  describe('"connect"', () => {
    beforeEach(function() {
      startServer();
    });

    afterEach(function() {
      stopServer();
    });

    it('connects to a WebSocket.', (done) => {
      server.on('connection', (ws, request) => {
        ws.on('message', message => {
          server.clients.forEach(client => {
            client.send(message);
          });
        });
      });

      const message = 'Hello, World!';
      const accessTokenData = {
        access_token: 'iJCRCjc8oROO-dkrkqCXOade997oa8Jhbz6awMUQPBQo80VenWqp_oNvfY6AnU5BxEsdDPOBfBP-uz_b0gAKBQ==.v=1.k=1.d=1498600993.t=a.l=.u=aaf9a833-ef30-4c22-86a0-9adc8a15b3b4.c=15037015562284012115',
        expires_in: 900,
        token_type: 'Bearer',
        user: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4'
      };
      const accessTokenStore = new AccessTokenStore();
      accessTokenStore.accessToken = accessTokenData;
      const baseURL = 'http://localhost:8087';
      const client = new WebSocketClient(baseURL, accessTokenStore);
      client.accessToken = accessTokenData;
      client.connect().then((socket) => {
        expect(socket).toBeDefined();

        socket.onmessage = (event) => {
          expect(event.data).toBe(message);
          done();
        };

        socket.send(message);
      }).catch(done.fail);
    });

    it('automatically reconnects with a WebSocket.', (done) => {
      const accessTokenData = {
        access_token: 'iJCRCjc8oROO-dkrkqCXOade997oa8Jhbz6awMUQPBQo80VenWqp_oNvfY6AnU5BxEsdDPOBfBP-uz_b0gAKBQ==.v=1.k=1.d=1498600993.t=a.l=.u=aaf9a833-ef30-4c22-86a0-9adc8a15b3b4.c=15037015562284012115',
        expires_in: 900,
        token_type: 'Bearer',
        user: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4'
      };
      const accessTokenStore = new AccessTokenStore();
      accessTokenStore.accessToken = accessTokenData;
      const baseURL = 'http://localhost:8087';
      const client = new WebSocketClient(baseURL, accessTokenStore);
      client.accessToken = accessTokenData;

      client.connect().then((socket) => {
        // "open" listener which will be triggered on WebSocket reconnect
        socket.addEventListener('open', done);

        // Restarting the server
        socket.addEventListener('close', startServer);

        server.close();
      }).catch(done.fail);
    });
  });
});

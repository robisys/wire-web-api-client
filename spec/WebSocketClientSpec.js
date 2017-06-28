const WebSocketClient = require('../dist/commonjs/tcp/WebSocketClient').default;

describe('WebSocketClient', () => {
  describe('constructor', () => {
    it('constructs a WebSocket client.', () => {
      const client = new WebSocketClient('baseURL');
      expect(client).toBeDefined();
    });
  });
});

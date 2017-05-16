const argv = require('optimist')
  .alias('c', 'conversation')
  .alias('e', 'email')
  .alias('p', 'password')
  .argv;

const WireAPIClient = require('./commonjs/index');

const urls = {
  rest: 'https://prod-nginz-https.wire.com',
  ws: 'wss://prod-nginz-ssl.wire.com'
};

const login = {
  email: argv.email,
  password: argv.password,
  persist: false
};

const client = new WireAPIClient(urls);
client.on(WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE, function(notification) {
  console.log('Received notification via WebSocket', notification);
});

client.login(login, true)
  .then((accessTokenData) => {
    console.log('Login successful', accessTokenData);
    return client.user.api.getSelf();
  })
  .then((userData) => {
    console.log('Got self user', userData.name);
  })
  .catch((error) => {
    console.error(error.message, error);
  });


const argv = require('optimist')
  .alias('c', 'conversation')
  .alias('e', 'email')
  .alias('h', 'handle')
  .alias('p', 'password')
  .argv;

const WireAPIClient = require('./commonjs/index');
const http = require('./commonjs/http');

console.log(`Testing "http" module: ${http.StatusCode.OK}`);

const urls = {
  rest: 'https://prod-nginz-https.wire.com',
  ws: 'wss://prod-nginz-ssl.wire.com'
};

const login = {
  email: argv.email,
  handle: argv.handle,
  password: argv.password,
  persist: false
};

const client = new WireAPIClient(urls);

client.on(WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE, function(notification) {
  console.log('Received notification via WebSocket', notification);
});

client.login(login)
  .then((context) => {
    console.log(`Got self user with ID "${context.userID}".`);
    return client.user.api.getUsers({handles: ['webappbot']})
  })
  .then((userData) => {
    console.log(`Found user with name "${userData[0].name}" by handle "${userData[0].handle}".`);
    return client.connect();
  })
  .catch((error) => {
    console.error(error.message, error);
  });


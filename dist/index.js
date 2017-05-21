const argv = require('optimist')
  .alias('c', 'conversation')
  .alias('e', 'email')
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
  password: argv.password,
  persist: false
};

const client = new WireAPIClient(urls);
client.on(WireAPIClient.TOPIC.WEB_SOCKET_MESSAGE, function(notification) {
  console.log('Received notification via WebSocket', notification);
});

client.login(login)
  .then((accessTokenData) => {
    console.log(`Login successful. AccessToken expires in "${accessTokenData.expires_in}"s.`);
    return client.user.api.getSelf();
  })
  .then((userData) => {
    console.log(`Got self user with name "${userData.name}".`);
    return client.user.api.getUsers({handles: ['webappbot']})
  })
  .then((userData) => {
    console.log(`Found user with name "${userData[0].name}" by handle "${userData[0].handle}".`);
    return client.listen();
  })
  .catch((error) => {
    console.error(error.message, error);
  });


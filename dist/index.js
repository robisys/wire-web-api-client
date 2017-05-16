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
client.login(login)
  .then((result) => {
    console.log('Login successful', result);
    return client.user.api.getSelf();
  })
  .then((result) => {
    console.log('Got self user', result.data);
  })
  .catch((error) => {
    console.error(error.message, error);
  });


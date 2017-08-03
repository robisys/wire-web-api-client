const argv = require('optimist')
  .alias('c', 'conversation')
  .alias('e', 'email')
  .alias('h', 'handle')
  .alias('p', 'password')
  .argv;

const Client = require('./dist/commonjs/Client');
const path = require('path');
const {FileEngine} = require('@wireapp/store-engine/dist/commonjs/engine');

const login = {
  email: argv.email,
  handle: argv.handle,
  password: argv.password,
  persist: true
};

const storagePath = path.join(process.cwd(), '.tmp', login.email);

const config = {
  store: new FileEngine(storagePath, {fileExtension: '.json'})
};

const client = new Client(config);

client.on(Client.TOPIC.WEB_SOCKET_MESSAGE, function(notification) {
  console.log('Received notification via WebSocket', notification);
});

Promise.resolve()
  .then(() => {
    // Trying to login (works only if there is already a valid cookie stored in the FileEngine)
    return client.init(login.email);
  })
  .catch((error) => {
    console.log(`Authentication via existing authenticator (Session Cookie or Access Token) failed: ${error.message}`);
    return client.login(login);
  })
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


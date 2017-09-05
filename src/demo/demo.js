import Client from '../../dist/commonjs/Client';
import {MemoryEngine} from '@wireapp/store-engine/dist/commonjs/engine';

window.onload = function() {
  function initBackendLabel() {
    const backendInfo = document.getElementById('wire-login-form-backend');
    backendInfo.textContent = BACKEND_ENV.rest;
    backendInfo.setAttribute('href', '?env=' + BACKEND_ENV.name);
  }

  function initLoginButton(client) {
    LOGIN_BUTTON.onclick = function(event) {
      event.preventDefault();
      console.log('Login button has been clicked.');

      const email = document.getElementById('wire-login-form-email').value;
      const password = document.getElementById('wire-login-form-password').value;

      const login = {
        email: email,
        password: password,
        persist: false,
      };

      return Promise.resolve()
        .then(() => client.init()) // Trying to login (works only if there is already a valid cookie stored in the browser)
        .catch(error => client.login(login))
        .then(context => {
          console.log('Login successful', context);

          LOGIN_BUTTON.className = 'valid';
          LOGIN_BUTTON.firstChild.data = '😊';

          LOGOUT_BUTTON.className = 'valid';

          return client.connect();
        })
        .catch(error => {
          console.error(`Login failed: ${error.message}`, error);
          LOGIN_BUTTON.className = 'invalid';
          LOGIN_BUTTON.firstChild.data = '😞';
        });

      return false;
    };
  }

  function initLogoutButton(client) {
    LOGOUT_BUTTON.onclick = function(event) {
      event.preventDefault();

      client
        .logout()
        .then(() => {
          console.log('Logout successful');

          LOGIN_BUTTON.className = 'valid';
          LOGIN_BUTTON.firstChild.data = 'login';

          LOGOUT_BUTTON.classList.remove('valid');
        })
        .catch(error => {
          console.error(`Logout failed: ${error.message}`, error);
          LOGOUT_BUTTON.className = 'invalid';
        });

      return false;
    };
  }

  const BACKEND_ENV = Client.BACKEND.PRODUCTION;
  const LOGIN_BUTTON = document.getElementById('wire-login-form-submit');
  const LOGOUT_BUTTON = document.getElementById('wire-logout-form-submit');

  const config = {
    store: new MemoryEngine('wire-demo'),
    urls: BACKEND_ENV,
  };

  const client = new Client(config);

  client.on(Client.TOPIC.WEB_SOCKET_MESSAGE, notification => {
    console.log('Received notification via WebSocket', notification);
  });

  client.accessTokenStore.on('AccessTokenStore.TOPIC.ACCESS_TOKEN_REFRESH', accessToken => {
    console.log('Acquired AccessToken', accessToken);
  });

  window.wire = Object.assign({}, {client: client});

  initBackendLabel();
  initLoginButton(client);
  initLogoutButton(client);
};

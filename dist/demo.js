import Client from "./commonjs/Client";

window.onload = function() {
  const urls = {
    rest: 'https://prod-nginz-https.wire.com',
    ws: 'wss://prod-nginz-ssl.wire.com'
  };

  const submitButton = document.getElementById('wire-login-form-submit');
  const backendInfo = document.getElementById('wire-login-form-backend');
  backendInfo.textContent = urls.rest;
  backendInfo.setAttribute('href', '?env=prod');

  submitButton.onclick = function(event) {
    event.preventDefault();
    console.log('Login button has been clicked.');

    const email = document.getElementById('wire-login-form-email').value;
    const password = document.getElementById('wire-login-form-password').value;

    const login = {
      email: email,
      password: password,
      persist: false
    };

    const client = new Client(urls);

    client.on(Client.TOPIC.WEB_SOCKET_MESSAGE, function(notification) {
      console.log('Received notification via WebSocket', notification);
    });

    return Promise.resolve()
      .then(() => {
        // Trying to login (works only if there is already a valid cookie stored in the browser)
        return client.init();
      })
      .catch((error) => {
        return client.login(login);
      })
      .then((context) => {
        console.log('Login successful', context);
        submitButton.className = 'valid';
        submitButton.firstChild.data = "😊";
        return client.connect();
      })
      .catch((error) => {
        console.error('Login failed', error.message);
        submitButton.className = 'invalid';
        submitButton.firstChild.data = "😞";
      });

    return false;
  };
};

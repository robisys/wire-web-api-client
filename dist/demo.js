import WireAPIClient from "./commonjs";

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

    const email = document.getElementById('wire-login-form-email').value;
    const password = document.getElementById('wire-login-form-password').value;

    const login = {
      email: email,
      password: password,
      persist: false
    };

    const client = new WireAPIClient(urls);
    client.login(login)
      .then((result) => {
        console.log('Login successful', result);
        submitButton.className = 'valid';
        submitButton.firstChild.data = "😊";
      })
      .catch((error) => {
        console.error('Login failed', error.message);
        submitButton.className = 'invalid';
        submitButton.firstChild.data = "😞";
      });

    return false;
  };
};

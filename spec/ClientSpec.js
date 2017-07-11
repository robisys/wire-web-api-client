const axios = require('axios');
const moxios = require('moxios');
const sinon = require('sinon');

const Client = require('../dist/commonjs/Client');
const {AuthAPI} = require('../dist/commonjs/auth');

describe('Client', () => {
  const baseURL = Client.BACKEND.PRODUCTION.rest;

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('"constructor"', () => {
    it('constructs a client with production backend by default', () => {
      const client = new Client();
      expect(client.client.http.baseURL).toBe(Client.BACKEND.PRODUCTION.rest);
      expect(client.client.ws.baseURL).toBe(Client.BACKEND.PRODUCTION.ws);
    })
  });

  describe('"init"', () => {
    it('loads an access token from the storage by default', (done) => {
      const client = new Client();
      const TABLE = client.accessTokenStore.ACCESS_TOKEN_TABLE;
      const PRIMARY_KEY = client.accessTokenStore.ACCESS_TOKEN_KEY;
      const accessTokenData = {
        access_token: 'initial-access-token-data',
        expires_in: 900,
        token_type: 'Bearer',
        user: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4'
      };
      const transientBundle = client.accessTokenStore.tokenStore.createTransientBundle(accessTokenData, accessTokenData.expires_in);

      client.accessTokenStore.tokenStore.engine.create(TABLE, PRIMARY_KEY, transientBundle).then((primaryKey) => {
        expect(primaryKey).toBe(PRIMARY_KEY);
        return client.init();
      }).then((context) => {
        expect(context.userID).toBe(accessTokenData.user);
        expect(client.accessTokenStore.accessToken).toBe(accessTokenData);
        done();
      });
    });
  });

  describe('"login"', () => {
    const accessTokenData = {
      access_token: 'iJCRCjc8oROO-dkrkqCXOade997oa8Jhbz6awMUQPBQo80VenWqp_oNvfY6AnU5BxEsdDPOBfBP-uz_b0gAKBQ==.v=1.k=1.d=1498600993.t=a.l=.u=aaf9a833-ef30-4c22-86a0-9adc8a15b3b4.c=15037015562284012115',
      expires_in: 900,
      token_type: 'Bearer',
      user: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4'
    };

    const loginData = {
      email: 'me@mail.com',
      password: 'top-secret',
      persist: false
    };

    it('creates a context from a successful login', (done) => {
      moxios.wait(() => {
        let request = moxios.requests.first();
        expect(request.config.method).toBe('post');
        expect(request.withCredentials).toBe(true);
        request.respondWith({
          status: 200,
          response: accessTokenData
        }).then(() => {
          expect(client.context.userID).toBe(accessTokenData.user);
          expect(client.accessTokenStore.accessToken.access_token).toBe(accessTokenData.access_token);
          done();
        });
      });

      const client = new Client();
      client.login(loginData);
    });

    it('can login after a logout', (done) => {
      moxios.stubRequest(`${baseURL}${AuthAPI.URL.ACCESS}/${AuthAPI.URL.LOGOUT}`, {
        status: 200,
        response: undefined
      });

      moxios.wait(() => {
        let request = moxios.requests.first();
        request.respondWith({
          status: 200,
          response: accessTokenData
        }).then(() => {
          return client.logout();
        }).then(() => {
          done();
        });
      });

      const client = new Client();
      client.login(loginData);
    });
  });

  describe('"logout"', () => {
    it('can logout a user', (done) => {
      moxios.stubRequest(`${baseURL}${AuthAPI.URL.ACCESS}/${AuthAPI.URL.LOGOUT}`, {
        status: 200,
        response: undefined
      });

      const client = new Client();
      client.logout().then(done).catch(done.fail);
    });
  });

  describe('"register"', () => {
    it('automatically gets an access token after registration', (done) => {
      const accessTokenData = {
        access_token: 'iJCRCjc8oROO-dkrkqCXOade997oa8Jhbz6awMUQPBQo80VenWqp_oNvfY6AnU5BxEsdDPOBfBP-uz_b0gAKBQ==.v=1.k=1.d=1498600993.t=a.l=.u=aaf9a833-ef30-4c22-86a0-9adc8a15b3b4.c=15037015562284012115',
        expires_in: 900,
        token_type: 'Bearer',
        user: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4'
      };

      const registerData = {
        accent_id: 0,
        assets: [],
        email: 'user@wire.com',
        id: 'aaf9a833-ef30-4c22-86a0-9adc8a15b3b4',
        locale: 'de',
        name: 'unique_username',
        picture: []
      };

      moxios.stubRequest(`${baseURL}${AuthAPI.URL.REGISTER}?challenge_cookie=true`, {
        status: 200,
        response: registerData
      });

      moxios.stubRequest(`${baseURL}${AuthAPI.URL.ACCESS}`, {
        status: 200,
        response: accessTokenData
      });

      const registrationData = {
        email: 'user@wire.com',
        name: 'unique_username',
        password: 'top-secret',
      };

      const client = new Client();
      client.register(registrationData).then((context) => {
        expect(context.userID).toBe(registerData.id);
        expect(client.accessTokenStore.accessToken.access_token).toBe(accessTokenData.access_token);
        done();
      })
    });
  });
});

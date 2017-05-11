const UUID = require('uuidjs');

export default class User {
  constructor(private id: string = UUID.generate(),
              private name: string = '') {
  }
}

const { DataSource } = require('apollo-datasource');
// import type { Store } from '../utils';

class UserApi extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findAllUsers() {
    const users = await this.store.allUsers();
    console.log('called from user class', users)
    return users;
  }
}

module.exports = UserApi;

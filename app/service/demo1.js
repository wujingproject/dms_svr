'use strict';

// app/service/user.js
const { Service } = require('egg').Service;

class Demo1 extends Service {
  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
}

module.exports = Demo1;

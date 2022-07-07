'use strict';

const Controller = require('egg').Controller;

class Demo1Controller extends Controller {
  async getList() {
    const { ctx } = this;

    // ctx.body = 'hi, test111111111111111111111111111111';

    let users = await ctx.service.demo1.getUserById();
    ctx.body = users;
  }
}

module.exports = Demo1Controller;

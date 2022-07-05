'use strict';

const Controller = require('egg').Controller;

class Demo1Controller extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, test111111111111111111111111111111';
  }
}

module.exports = Demo1Controller;

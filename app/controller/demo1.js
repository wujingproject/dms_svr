'use strict';

const Controller = require('egg').Controller;

class Demo1Controller extends Controller {
  async getList() {
    const { ctx } = this;
    const data = ctx.query; // condition
    let param = { // 搜索 post 表
      // where: { title: 'Hello World', age: [10, 11] }, // WHERE 条件
      // columns: ['title'], // 要查询的表字段
      // orders: [['id', 'desc']], // 排序方式 desc降序 
      // limit: 10, // 返回数据量
      // offset: 0, // 数据偏移量
    }
    let users = await ctx.service.demo1.getList(param);
    ctx.body = users;
  }
}

module.exports = Demo1Controller;

'use strict';

const Controller = require('egg').Controller;

class Demo1Controller extends Controller {
  async getList() {
    const { ctx } = this;
    const data = ctx.request.body; // condition
    let param = { // 搜索 post 表
      // where: { title: 'Hello World', age: [10, 11] }, // WHERE 条件
      // columns: ['title'], // 要查询的表字段
      // orders: [['id', 'desc']], // 排序方式 desc降序 
      // limit: 10, // 返回数据量
      // offset: 0, // 数据偏移量
    }
    let result = await ctx.service.demo1.getList(param);
    const res = { data: result, status: 200 };
    ctx.body = res;
  }

  async create() {
    const { ctx } = this;
    // 参数校验
    try {
      ctx.validate({
        name: { type: 'string', required: true, desc: '姓名' },
        age: { type: 'integer', required: false, min: 1, max: 1000, desc: '年龄' },
        address: { type: 'string', required: false, desc: '地址' },
        imgs: { type: 'string', required: false, desc: '图片组' }
      });
    } catch (err) {
      ctx.logger.error('Demo1Controller.create params err', err);
      ctx.body = { status: 0, message: '参数校验失败' };
      return;
    }
    // 插入数据库
    const data = ctx.request.body;
    let result = await ctx.service.demo1.create(data);
    ctx.body = { data: { id: result.insertId }, status: 200 };
  }
}

module.exports = Demo1Controller;

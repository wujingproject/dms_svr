'use strict';

const Controller = require('egg').Controller;

// 通常情况下，在 Controller 中会做如下几件事情：
// 接收、校验、处理 HTTP 请求参数
// 向下调用服务（Service）处理业务
// 通过 HTTP 将结果响应给用户

class Demo1 extends Controller {
  async upsert() {
    const { ctx, service } = this;

    // const createRule = {
    //   title: { type: 'string' },
    //   content: { type: 'string' },
    // };

    // 校验和组装参数
    // ctx.validate(createRule);
    // const data = Object.assign(ctx.request.body, { author: ctx.session.userId });

    // const userInfo = await ctx.service.Demo1.find(1);

    // 调用 Service 进行业务处理
    // const res = await service.post.create(data);
    // 响应客户端数据
    ctx.body = "hahaahhaah";
    // ctx.status = 201;
  }
}

module.exports = Demo1;

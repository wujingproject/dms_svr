'use strict';

const Controller = require('egg').Controller;

class Demo1Controller extends Controller {
    async getList() {
        const { ctx } = this;
        const data = ctx.query;
        console.log('8888888888888888888888888888888888888888888888888888888888888888', data);
        const condition = JSON.parse(data.condition);
        const whereParam = {};
        Object.keys(condition).forEach((key) => {
            if (condition[key]) {
                whereParam[key] = condition[key];
            }
        });
        let param = { // 搜索 post 表
            where: JSON.stringify(whereParam) === '{}' ? '' : whereParam,
            orders: [['id', 'desc']], // 排序方式 desc降序 
            limit: data.size, // 返回数据量
            offset: data.pageIndex * data.size, // 数据偏移量 
        }
        let result = await ctx.service.demo1.getList(param);
        console.log('8888888888888888888888888888888888888888888888888888888888888888', result);
        ctx.body = { status: 200, data: result, message: '操作成功' };
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

        const data = ctx.request.body;
        let result = null;
        if (!data.id) {
            // 插入新数据到数据库
            result = await ctx.service.demo1.create(data);
        } else {
            // 修改数据库数据
            result = await ctx.service.demo1.update(data);
            console.log('99999999999999999999999999999999999999999999999', result);
        }
        ctx.body = { status: 200, data: { id: result.insertId }, message: '操作成功' };
    }
}

module.exports = Demo1Controller;

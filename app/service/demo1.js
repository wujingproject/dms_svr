'use strict';

const Service = require('egg').Service;

class Demo1Service extends Service {

    async getList(param) {
        const { ctx } = this;
        ctx.app.mysql.get('dormitory_info', {}); // 不论{}内是什么参数，get永远只有一条数据
        // this.app.mysql.select('dormitory_info', {}); // select是查询多条语句
        return await ctx.app.mysql.select('dormitory_info', param);
        // return await ctx.app.mysql.findAll('dormitory_info', param);
    }

    async create(param) {
        const { ctx } = this;
        // return await ctx.app.mysql.insert('dormitory_info', param);
        return await ctx.app.mysql.create('dormitory_info', param);
    }

    async update(param) {
        const { ctx } = this;
        return await ctx.app.mysql.update('dormitory_info', param, { where: { id: param.id } });
    }
}
module.exports = Demo1Service;
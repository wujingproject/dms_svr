'use strict';

const Service = require('egg').Service;

class Demo1Service extends Service {
    async getList(param) {
        // this.app.mysql.get('dormitory_info', {}); // 不论{}内是什么参数，get永远只有一条数据
        // this.app.mysql.select('dormitory_info', {}); // select是查询多条语句
        return await this.app.mysql.select('dormitory_info', param);
    }
}
module.exports = Demo1Service;
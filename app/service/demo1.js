'use strict';

const Service = require('egg').Service;

class Demo1Service extends Service {
    async getUserById(id) {
        // 根据id查询用户信息
        return await this.app.mysql.get('dormitory_info', { id: id });
    }
}
module.exports = Demo1Service;
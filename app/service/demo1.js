// app/service/todo.js
const { Service } = require('egg');

class Demo1Service extends Service {
    /**
     * 查询
     */
    async find(uid) {
        const user = await this.ctx.db.query('select * from user where uid = ?', uid);
        return user;
    }
}
module.exports = Demo1Service;
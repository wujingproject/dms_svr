# 学习文档

https://www.eggjs.org/zh-CN/tutorials

# 创建初始化项目步骤

npm init egg --type=simple

npm install

npm run dev

# 连接mysql数据库

npm i --save egg-mysql

# 进入数据库

cd C:\Program Files\MySQL\MySQL Server 8.0\bin 进入到bin文件下

输入：mysql -u root -p

输入密码： huangrong

# 处理跨域问题

安装egg-cors：npm install egg-cors --save

# egg查询

查询多个

Project.findAll({
    where: {
        id: {
            [Op.and]: {a: 5},           // 且 (a = 5)
            [Op.or]: [{a: 5}, {a: 6}],  // (a = 5 或 a = 6)
            [Op.gt]: 6,                // id > 6
            [Op.gte]: 6,               // id >= 6
            [Op.lt]: 10,               // id < 10
            [Op.lte]: 10,              // id <= 10
            [Op.ne]: 20,               // id != 20
            [Op.between]: [6, 10],     // 在 6 和 10 之间
            [Op.notBetween]: [11, 15], // 不在 11 和 15 之间
            [Op.in]: [1, 2],           // 在 [1, 2] 之中
            [Op.notIn]: [1, 2],        // 不在 [1, 2] 之中
            [Op.like]: '%hat',         // 包含 '%hat'
            [Op.notLike]: '%hat',       // 不包含 '%hat'
            [Op.iLike]: '%hat',         // 包含 '%hat' (不区分大小写)  (仅限 PG)
            [Op.notILike]: '%hat',      // 不包含 '%hat'  (仅限 PG)
            [Op.overlap]: [1, 2],       // && [1, 2] (PG数组重叠运算符)
            [Op.contains]: [1, 2],      // @> [1, 2] (PG数组包含运算符)
            [Op.contained]: [1, 2],     // <@ [1, 2] (PG数组包含于运算符)
            [Op.any]: [2,3],            // 任何数组[2, 3]::INTEGER (仅限 PG)
        },
        status: {
            [Op.not]: false,           // status 不为 FALSE
        }
    }
})

# 创建数据时的参数校验

安装valparams：npm i egg-valparams --save
npm i egg-validate --save

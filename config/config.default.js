/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1657010032226_4370';

  // add your middleware config here
  // 加载 errorHandler 中间件
  config.middleware = ['errorHandler'];
  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: 'localhost', //链接地址
      port: '3306', //端口
      user: 'root', //数据库用户名
      password: 'huangrong', //数据库密码
      database: 'huangrong' //数据库名称
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app: true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };

  // 取消安全证书验证，不设置默认是不验证，post请求会报错，所以在此配置
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["http://localhost:8000"], // 白名单，可以填*号
  }

  config.cors = {
    origin: 'http://localhost:8000',
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH, OPTIONS",
  }

  return {
    ...config,
    ...userConfig,
  };
};

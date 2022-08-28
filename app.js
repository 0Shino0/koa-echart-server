// 服务器的入口文件
// 1.创建KOA的实例对象
const Koa = require('koa')
const app = new Koa()
// 2.绑定中间件
// 绑定第一层中间件
const resDurationMiddleware = require('./middleware/koa_response_duration')
app.use(resDurationMiddleware)
// 绑定第二层中间件
const respHeaderMiddleware = require('./middleware/koa_response_header')
app.use(respHeaderMiddleware)
// 绑定第三层中间件
const resDataMiddleware = require('./middleware/koa_response_data')
app.use(resDataMiddleware)

// 3.绑定端口号8888
app.listen(8888)
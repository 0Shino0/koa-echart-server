// 处理业务逻辑的中间件，读取某个json文件的数据
const path = require('path')
const fileUrils = require('../util/file_utils')
module.exports = async (ctx, next) => {
    // 更具url
    const url = ctx.request.url // /api/seller   ../data/seller.json
    let filePath = url.replace('/api', '') //  /seller
    filePath = '../data' + filePath + '.json' //  ../data/seller.json
    filePath = path.join(__dirname, filePath)  // 转化为绝对路径
    try {
        const ret = await fileUrils.getFileJsonData(filePath)
        ctx.response.body = ret
    } catch (error) {
        const errorMsg = {
            message: '读取的文件内容失败，文件不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }
    console.log(filePath);
    await next() // 保证内层中间件执行
}
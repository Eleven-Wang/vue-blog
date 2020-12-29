const Koa = require('koa')
const KoaBody = require('koa-body')
const static = require('koa-static')
const fs = require('fs')
// const cors = require('koa2-cors')
// const {historyApiFallback} = require('koa2-connect-history-api-fallback')

let router = require('./router/router')

const app = new Koa()
//允许传输文件（ctx.request.body需要用到这个
app.use(KoaBody({
    multipart: true
}))

// 前端打包dist文件放到服务器view文件夹里，前后端同源的路由方法
app.use(async (ctx, next) => { // history 中间件
	const path = '/view/' // 需要判断的路径
	await next() // 等待请求执行完毕
	if (ctx.response.status === 404) { // 判断是否符合条件
		ctx.type = 'text/html; charset=utf-8' // 修改响应类型
		ctx.body= fs.readFileSync('.' + path + 'index.html') // 修改响应体
	}
})

// 前端打包后与后端跨域，后端的解决办法
// app.use(cors())

// app.use(historyApiFallback())
app.use(static(__dirname + '/view'))
app.use(router.routes())

app.listen(5000)
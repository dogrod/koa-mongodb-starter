const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  await next()

  ctx.type = 'text/html'
  ctx.body = '<h1>Hello Koa2</h1>'
})

app.listen(3000)
console.log('app started at port 3000')

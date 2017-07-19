const Koa = require('koa')

const bodyParser = require('koa-bodyparser')
// require controllers
const controllers = require('./apis')

const app = new Koa()

require('./models')

// log request url
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next() // call next middleware
})

app.use(bodyParser())
// user controllers
app.use(controllers())

app.listen(3000)
console.log('app started at port 3000')

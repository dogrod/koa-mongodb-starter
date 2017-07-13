const Koa = require('koa')

// koa-router returns a function
const router = require('koa-router')() // IIFE!!!! important

const app = new Koa()

// log request url
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next() // call next middleware
})

// config url-route
router.get('/hello/:name', async (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}</h1>`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>I'm Index</h1>`
})

// use router middleware
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000')

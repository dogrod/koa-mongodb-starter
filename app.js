const Koa = require('koa')

// koa-router returns a function
const router = require('koa-router')() // IIFE!!!! important
const bodyParser = require('koa-bodyparser')

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

// render page
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h2>
    <form action="/signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" value="password"></p>
      <p><input type="submit" value="Submit"></p>
    </form>`
})

router.post('/signin', async (ctx, next) => {
  const name = ctx.request.body.name || ''
  const password = ctx.request.body.password || ''

  console.log(`signin with name: ${name}, password: ${password}`)
  if (name && password) {
    ctx.response.body = `<h1>Welcome, ${name}</h1>`
  } else {
    ctx.response.body = `<h1>Login Failed!</h1>`
  }
})

app.use(bodyParser())
// use router middleware
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000')

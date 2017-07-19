const index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h2>
    <form action="/signup" method="post">
      <p>Name: <input name="username" value="koa"></p>
      <p>Password: <input name="password" value="password"></p>
      <p><input type="submit" value="Submit"></p>
    </form>`
}

const hello = async (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>Hello, ${name}</h1>`
}

module.exports = {
  'GET /': index,
  'GET /hello/:name': hello,
}

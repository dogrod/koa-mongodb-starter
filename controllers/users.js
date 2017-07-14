const signin = async (ctx, next) => {
  const name = ctx.request.body.name || ''
  const password = ctx.request.body.password || ''

  console.log(`signin with name: ${name}, password: ${password}`)
  if (name && password) {
    ctx.response.body = `<h1>Welcome, ${name}</h1>`
  } else {
    ctx.response.body = `<h1>Login Failed!</h1>`
  }
}

module.exports = {
  'POST /signin': signin,
}

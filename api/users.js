const signin = async (ctx, next) => {
  const name = ctx.request.body.name || ''
  const password = ctx.request.body.password || ''

  console.log(`signin with name: ${name}, password: ${password}`)

  let res
  ctx.type = 'json'
  if (name && password) {
    res = {
      code: 'success',
      description: null,
      result: {
        name,
      }
    }
  } else {
    res = {
      code: 'failed',
      description: 'invalid username or password',
      result: null
    }
  }
  ctx.response.body = res
}

module.exports = {
  'POST /signin': signin,
}

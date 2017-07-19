var models  = require('../models')
var User    = models.User

exports.signup = async (ctx, next) => {
  const username = ctx.request.body.username.toLowerCase()
  const password = ctx.request.body.password
  console.log(JSON.stringify(ctx))

  User.find({ username }, (err, users) => {
    if (err) {
      return next(err)
    }
    if (users.length > 0) {
      console.error('username exist')
      ctx.body = {
        code: 'failed',
        message: '用户已存在'
      }
      return
    }

    let user = new User()

    user.username = username
    user.password = password


    user.save((saveErr) => {
      if (saveErr) {
        console.error(JSON.stringify(saveErr))
        return next(saveErr)
      }
      console.info('signup succeed')
      ctx.redirect(`/hello/${username}`)
    })
  })
}
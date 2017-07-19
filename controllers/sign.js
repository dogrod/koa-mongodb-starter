var models  = require('../models')
var User    = models.User

exports.signup = async (ctx, next) => {
  // get request body
  const bodyInfo = await ctx.request.body

  const userInst = new User()

  userInst.username = bodyInfo.username.toLowerCase()
  userInst.password = bodyInfo.password

  try {
    const user = await userInst.save()

    const res = {
      code: 'success',
      message: `${userInst.username}注册成功`
    }

    ctx.body = res
    ctx.redirect(`/hello/${userInst.username}`)

    return next()
  } catch (error) {
    ctx.body = error.toString()

    return next()
  }

  // User.find({ username }, async (err, users) => {
  //   if (err) {
  //     return next(err)
  //   }
  //   if (users.length > 0) {
  //     console.error('username exist')
  //     ctx.body = {
  //       code: 'failed',
  //       message: '用户已存在'
  //     }
  //     return next()
  //   }

  //   let user = new User()

  //   user.username = username
  //   user.password = password


  //   user.save(async (saveErr) => {
  //     if (saveErr) {
  //       console.error(JSON.stringify(saveErr))
  //       return next(saveErr)
  //     }
  //     console.info('signup succeed')
  //     ctx.body = {
  //       code: 'success',
  //       message: '注册成功'
  //     }

  //     return next()
  //   })
  // })
}
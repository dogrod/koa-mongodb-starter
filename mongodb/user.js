const models = require('../models')
const User = models.User

exports.isUserExist = async (options) => {
  try {
    await User.find(options).exec()
  } catch (error) {
    
  }
}
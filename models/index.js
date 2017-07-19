const mongoose = require('mongoose')

const config = require('../config')

mongoose.connect(
  config.mongoDB, 
  {}, 
  (err) => {
    if (err) {
      console.log('connect mongoDB error:', err)
      process.exit(1)
    }
  }
)

require('./user')

exports.User = mongoose.model('User')
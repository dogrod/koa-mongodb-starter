const mongoose = require('mongoose')

const config = require('../config')

mongoose.Promise = global.Promise
mongoose.connect(
  config.mongoDB, 
  { useMongoClient: true }, 
  (err) => {
    if (err) {
      console.log('connect mongoDB error:', err)
      process.exit(1)
    }
  }
)

require('./user')

exports.User = mongoose.model('User')
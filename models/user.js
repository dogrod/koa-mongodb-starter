const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const userSchema = new Schema({
  name: { type: String },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  admin: { type: Boolean },
  location: { type: String },
  age: { type: Number },
  sex: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

userSchema.index({ username: 1 }, { unique: true })

userSchema.pre('save', function(next) {
  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }

  next()
})

// create a model using schema
const User = mongoose.model('User', userSchema)

module.exports = User

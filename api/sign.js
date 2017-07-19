const sign = require('../controllers/sign')

module.exports = {
  'POST /signup': sign.signup,
}

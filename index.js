require('dotenv').config()
//  equivalent to type="module"
// allows for import/export
require = require('esm')(module)
module.exports = require('./server/main')

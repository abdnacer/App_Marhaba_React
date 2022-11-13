const mongoose = require('mongoose')

const DB = mongoose.connect(process.env.URL_DATABASE, () => console.log('Database Connected'))

module.exports = DB
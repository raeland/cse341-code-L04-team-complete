const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient

module.exports = {
  url: process.env.MONGODB_URI,
}

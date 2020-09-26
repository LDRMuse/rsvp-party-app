require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
    console.info('Connected to MongoDB')
  } catch (error) {
    console.error(error.msg)
    process.exit
  }
}

module.exports = connectDB


const express = require('express')
const dotenv = require('dotenv');

//connect ot DB
const connectDB = require('./config/db')
connectDB()

const app = express()
dotenv.config();

app.use(express.json((extended:true)))

// this is coming from the post request in register.js route
app.use('/register', require('./routes/register'))

app.listen(process.env.PORT, () => console.info(`Server is running on port ${process.env.PORT}`))

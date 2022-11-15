const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()

//Import Routes
const Zoom = require('./routes/Zoom')

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
  },
  () => console.log('Connected to DB!')
)

//Middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())

//Routes
app.use('/zoom', Zoom)

app.listen(process.env.PORT || 3001, () => {
  console.log(`Backend started at http://localhost:${process.env.PORT || 3001}`)
})

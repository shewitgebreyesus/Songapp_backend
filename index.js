 require('dotenv').config()
const express = require('express')
const songs = require('./src/routes/songsroute')
const connectDB = require('./src/config/mongo')
const app = express()
const cors = require('cors');

const port = process.env.port || 5000
app.use(express.json())
app.use(cors())
app.use('/song', songs)


app.listen(port, () => {
    connectDB,
    console.log(`server running on ${port}`)
})
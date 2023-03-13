const express = require('express')
const songs = require('./routes/songsroute')
const mongoose = require('mongoose')
const connectDB = require('./config/mongo.js')
const dotEnv = require('dotenv').config()
const app = express()

const port = process.env.port || 5000
app.use(express.json())
app.use('/song', songs)


app.listen(port, () => {
    connectDB,
    console.log(`server running on ${port}`)
})
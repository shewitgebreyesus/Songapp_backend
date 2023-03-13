require('dotenv').config()
const mongoose = require('mongoose')

const songs = require('../model/songs');
//const dotenv =  require('dotenv').config()
async function connectDB() { 
    mongoose.connect(process.env.MONGOOSE_URL).then((val) => { 
        console.log('mongo connected' )
    })
}
module.exports = connectDB();
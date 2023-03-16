const mongoose = require('mongoose')
async function connectDB() { 
    mongoose.connect(process.env.MONGOOSE_URL).then((val) => { 
        console.log('mongo connected' )
    })
}
module.exports = connectDB();
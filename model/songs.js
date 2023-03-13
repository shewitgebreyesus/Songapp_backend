const mongoose = require('mongoose')

const songsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
      required: [true, 'title is required']  
    },
    artist: {
        type: String,
       require: true 
    },
    album: {
       type: String,
       require: true  
    },
    genre: {
type: String,
       require: true 
    }
})
const Songs = mongoose.model('Songs',songsSchema)
module.exports = Songs
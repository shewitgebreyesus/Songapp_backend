const mongoose = require('mongoose')

const songsSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
      required: [true, 'title is required']  
    },
    artist: {
        type: String,
   required: [true, 'artist is required']  
    },
    album: {
       type: String,
     required: [true, 'album is required']   
    },
    genre: {
type: String,
       required: [true, 'genre is required']  
    }
})
const Songs = mongoose.model('Songs',songsSchema)
module.exports = Songs
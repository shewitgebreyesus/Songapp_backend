const express = require('express')
const router = express.Router()
const { getSong, postSong, del, modify, getStatistics } = require('../controller/song')
const { bodyValidator} = require('../middleware/body.middlewares')
router.route('/').get(getSong).post(postSong).delete(del)
router.put('/' ,bodyValidator,modify)
router.get('/getAllStatistics',getStatistics)
module.exports = router;
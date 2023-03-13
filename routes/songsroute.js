const express = require('express')
const song = require('../model/songs')
const { json } = require('express')
const { number } = require('joi')
const router = express.Router()
const { getSong, postSong, del, modify, getStatistics } = require('../controller/song')
const { bodyValidator} = require('../middleware/body.middlewares')

router.route('/').get(getSong).post(postSong).delete(del)
router.put('/' ,bodyValidator,modify)
// router.get('/').put(modify).delete(del)
router.get('/getAllStatistics',getStatistics)
// router.post('/',postSong )

// router.put('/{id}', async (req, res) => {
//      const id = req.params.id;
//     const data = await songs.findById(id);
//     if (!data) { 
//         return res.status(404).send('data not found')
//     }
//     try { 
//         data = req.body;
//         await data.save()
//         return res.status(200).json(data)
//     }
//     catch (e) {
//         return res.send(e);
//     }
    
// })

// router.delete('/{id}', async (req, res) => {
//     const id = req.query.id
//     const data = songs.findById(id)
//     if (!data)
//     { res.send('data not found') }
//     try {
//         await user.findByIdAndDelete(data._id);
//         return res.status(200).send(data)
//     }
//     catch (e) { 
//         return res.send(e);
//     }
    
// })
// router.get('/song:id', )

module.exports = router;
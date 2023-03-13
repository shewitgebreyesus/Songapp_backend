const Song = require('../model/songs');

const { post, isId, update } = require('../Valdiations/validators');
const getSong = async (req, res) => {

    const allSongs = await Song.find()
    return res.status(200).json(allSongs)
}


const postSong = async (req, res) => {
    const { error, value } = post.validate(req.body);
    if (error) { 
        return res.status(400).send(error.message);
    }

    try {
        const { title, artist, album, genre } = req.body
        
         console.log(req.body)
    const data = await Song.create({
        title,
        artist,
        album,
        genre
    })
        
        await data.save()
        
    res.status(200).json({ data })
    } catch (error) {
        console.log(error)
         res.status(500).json({error})
    }
   
}
const modify = async (req, res) => { 
    const { error, value } = isId.validate(req.query);
    if (error) { 
        return res.status(400).send(error.message);
  }
  
      const id = req.query.id;
    const data = await Song.findById(id);
    if (!data) { 
        return res.status(404).send('data not found')
    }
    try { 
        data = req.body;
        await data.save()
        return res.status(200).json(data)
    }
    catch (e) {
        return res.send(e);
    }
}

const del = async (req, res) => { 
    const { error, value } = isId.validate(req.query);
    if (error) { 
        return res.status(400).send(error.message);
    }
     const id = req.query.id
    const data = Song.findById(id)
    if (!data)
    { res.send('data not found') }
    try {
        await user.findByIdAndDelete(data._id);
        return res.status(200).send(data)
    }
    catch (e) { 
        return res.send(e);
    }
    
}
const getStatistics = async(req, res)=> { 
     const noSongTotal = await Song.aggregate([
      {
        $group: {
          _id: null,
          noSong: {
            $addToSet: "$title",
          },
          noAlbum: {
            $addToSet: "$album",
          },
          noArtist: {
            $addToSet: "$artist",
          },
          noGenre: {
            $addToSet: "$genre",
          },
        },
      },
      {
        $project: {
          _id: 0,
          title: {
            $size: "$noSong",
          },
          album: {
            $size: "$noAlbum",
          },
          artist: {
            $size: "$noArtist",
          },
          genre: {
            $size: "$noGenre",
          },
        },
      },
    ]);

    const noSongGenre = await Song.aggregate([
      {
        $group: {
          _id: "$genre",
          noSong: {
            $addToSet: "$title",
          },
        },
      },
      {
        $project: {
          _id: 0,
          genre: "$_id",
          song: {
            $size: "$noSong",
          },
        },
      },
    ]);

    // number of song artist has
    const noSongArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          noSong: {
            $addToSet: "$title",
          },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          song: {
            $size: "$noSong",
          },
        },
      },
    ]);
    //number of song and album artist has
    const noSongAndAlbumArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          noSong: {
            $addToSet: "$title",
          },
          noAlbum: {
            $addToSet: "$album",
          },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          song: {
            $size: "$noSong",
          },
          album: {
            $size: "$noAlbum",
          },
        },
      },
    ]);
    // number of song each album
    const noSongAlbum = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          noSong: {
            $addToSet: "$title",
          },
        },
      },
      {
        $project: {
          song: {
            $size: "$noSong",
          },
        },
      },
    ]);
    res.status(200).json({
        totalSongs: noSongTotal,
        noSongAlbum: noSongAlbum,
        noSongGenre: noSongGenre,
        noSongAndAlbumArtist: noSongAndAlbumArtist,
    noSongArtist:noSongArtist
        
    })
}

module.exports = {getSong,postSong, modify, del, getStatistics}
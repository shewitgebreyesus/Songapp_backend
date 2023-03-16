 const genreList = {
    ROCK:'rock',
    POP:'pop',
    BLUES:'blues',
    JAZZ:'jazz',
  

}
const joi = require('joi');
const post = joi.object({
    title: joi.string().required(),
    artist: joi.string().required(),
    album: joi.string().required(),
    genre:joi.string().required().valid(...Object.values(genreList))
    
})

const update = joi.object({
       title: joi.string()
    .optional(),
    artist: joi.string()
    .optional(),
    album: joi.string()
    .optional(),
    genre: joi.string().optional().valid(...Object.values(genreList))
})
const isId = joi.object({
    id: joi.string().regex(/^[0-9a-fA-F]{24}$/).required().error(new Error('invalid id'))
})
module.exports = {
    post: post,
    isId: isId,
    update:update
}
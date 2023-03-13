const { update} =  require("../Valdiations/validators")
const bodyValidator = (req, res, next)=> {

    const { error, value } = update.validate(req.body);
    if (error) {
        console.log('tefetrual')
        return res.status(400).send(error.message);
    }
    else { 
        next();
    }

}
module.exports = {
    bodyValidator:bodyValidator
}
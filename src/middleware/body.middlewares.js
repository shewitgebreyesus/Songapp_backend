const { update} =  require("../Valdiations/validators")
const bodyValidator = (req, res, next)=> {

    const { error, value } = update.validate(req.body);
    if (error) {
        return res.status(400).send(error.message);
    }
    else { 
        req.values = value
         next();
    }

}
module.exports = {
    bodyValidator:bodyValidator
}
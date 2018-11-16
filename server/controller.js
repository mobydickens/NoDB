const defaultBooklist = require('./defaultBooklist');
const userBooklist = require('./userBooklist');


module.exports = {
    //GET
    defaultList: (req, res) => {
        res.status(200).send(defaultBooklist);
    },
    //POST
    //will take in req.body
    addUserBook: (req, res) => {
        const { title, author, genre, recommended } = req.body
        console.log(req.body);
        res.status(200).send(userBooklist);
    }
}
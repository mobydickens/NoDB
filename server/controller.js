let defaultBooklist = require('./defaultBooklist');
let userBooklist = require('./userBooklist');
let id = 60;

module.exports = {
    //GET
    defaultList: (req, res) => {
        res.status(200).send(defaultBooklist);
    },
    //GET
    userList: (req, res) => {
        res.status(200).send(userBooklist);
    },
    //POST
    //will take in req.body
    addUserBook: (req, res) => {
        const { title, author, genre, recommended } = req.body
        const book = {
            title: title,
            author: author,
            genre: genre,
            recommended: recommended,
            id: id 
        }
        id++
        userBooklist.push(book);
        res.status(200).send(userBooklist);
    }
}
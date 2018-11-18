let defaultBooklist = require('./defaultBooklist');
let userBooklist = require('./userBooklist');
let id = 60;

module.exports = {
    //GET
    defaultList: (req, res) => {
        res.status(200).send(defaultBooklist);
    },
    userBooklist: (req, res) => {
        res.status(200).send(userBooklist);
    },
    //POST - will take in req.body
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
    },
    //PUT - expects param id and body
    editUserBook: (req, res) => {
        let { id } = req.params;
        let { title, author, genre, recommended } = req.body
        let bookIndex = userBooklist.findIndex(book => {
            return book.id === Number(id);
        })
        userBooklist[bookIndex] = {
            title: title,
            author: author,
            genre: genre,
            recommended: recommended,
            id: Number(id)
        }
        res.status(200).send(userBooklist);
    }
}
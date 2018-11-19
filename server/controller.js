let axios = require('axios');
var parseString = require('xml2js').parseString;
let defaultBooklist = require('./defaultBooklist');
let userBooklist = require('./userBooklist');
let id = 60;
const config = require('./../config.js');

module.exports = {
    //GET
    defaultList: (req, res) => {
        res.status(200).send(defaultBooklist);
    },
    userBooklist: (req, res) => {
        res.status(200).send(userBooklist);
    },
    getCover: (req, res) => {
        let { id } = req.params;
        let bookIndex = userBooklist.findIndex(book => {
            return book.id === Number(id);
        })
        let book = userBooklist[bookIndex];
        axios.get(`https://www.goodreads.com/search/index.xml?key=${config.coverKey}&q=${book.title.replace(/ /g,"%20")}&search=title`)
            .then(resp => {
                return new Promise((resolve, reject) => {
                    let xml = resp.data;
                    parseString(xml, function (err, result) {
                        if(err !== null) {
                            return reject(err);
                        }
                        resolve(result);
                    });
                })
            }).then(result => {
                let img = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].image_url[0];
                res.redirect(302, img);
            }).catch(e => { 
                console.log(e);
                res.status(500).send(e) 
            })
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
    },
    //DELETE
    deleteUserBook: (req, res) => {
        let { id } = req.query;
        userBooklist = userBooklist.filter(book => {
            return book.id !== Number(id);
        })
        res.status(200).send(userBooklist);
    }
}
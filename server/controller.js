let axios = require('axios');
var parseString = require('xml2js').parseString;
let defaultBooklist = require('./defaultBooklist');
let imageDictionary = {};
let id = 60;
const config = require('./../config.js');
var throttle = require('promise-ratelimit')(1001);


module.exports = {
    //GET
    defaultList: (req, res) => {
        console.log("is default get working?")
        res.status(200).send(defaultBooklist);
    },
    userBooklist: (req, res) => {
        console.log("is favorites get working?")
        let favorites = defaultBooklist.filter(book => book.favorites === true);
        res.status(200).send(favorites);
    },
    getCover: (req, res) => {
        let { id } = req.params;
        let bookIndex = defaultBooklist.findIndex(book => {
            return book.id === Number(id);
        })
        let book = defaultBooklist[bookIndex];

        if(imageDictionary[book.title]) {
            console.log(`Already found image for book ${book.title}! Skipping request...`);
            res.redirect(302, imageDictionary[book.title]);
            return;
        }
        return;
        throttle().then( () => {
            console.log(`Looking up image for book ${book.title}...`);
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
                    imageDictionary[book.title] = img;
                    res.redirect(302, img);
                }).catch(e => { 
                    console.log(e);
                    res.status(500).send(e) 
            })
        })
    },
    
    //POST - will take in req.body
    addUserBook: (req, res) => {
        const { title, author, genre, recommended } = req.body
        let book = {
            title: title,
            author: author,
            genre: genre,
            recommended: recommended,
            favorites: true,
            original: false,
            id: id 
        }
        id++
        defaultBooklist.push(book);
        let favorites = defaultBooklist.filter(book => {
            return book.favorites === true;
        })
        res.status(200).send(favorites);   
    },

    //PUT - expects param id and body
    editUserBook: (req, res) => {
        let { id } = req.params;
        let { title, author, genre, recommended } = req.body
        let bookIndex = defaultBooklist.findIndex(book => {
            return book.id === Number(id);
        })
        defaultBooklist[bookIndex] = {
            title: title,
            author: author,
            genre: genre,
            recommended: recommended,
            favorites: true,
            original: false,
            id: Number(id)
        }
        
        let favorites = defaultBooklist.filter(book => {
            return book.favorites === true;
           
        })
        res.status(200).send(favorites);
    },

    //DELETE
    deleteUserBook: (req, res) => {
        let { id } = req.query;
        let bookIndex = defaultBooklist.findIndex(book => {
            return book.id === Number(id);
        })
        defaultBooklist[bookIndex] = {
            title: defaultBooklist.title,
            author: defaultBooklist.author,
            genre: defaultBooklist.genre,
            recommended: defaultBooklist.recommended,
            favorites: false,
            original: defaultBooklist.original,
            id: Number(id)
        }
        let favorites = defaultBooklist.filter(book => {
            return book.favorites === true;
        })
        res.status(200).send(favorites);
    }
}
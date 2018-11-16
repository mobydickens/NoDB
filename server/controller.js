const defaultBooklist = require('defaultBooklist');
const userBooklist = require('userBooklist');


module.exports = {
    //GET
    defaultList: (req, res) => {
        res.status(200).send(defaultBooklist);
    }
}
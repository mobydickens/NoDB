const express = require('express');
const bodyParser = require('body-parser');
const config = require('./../config.js');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());

//endpoints
app.get('/books', controller.defaultList);
app.get('/userbooks', controller.userBooklist)
app.post('/books', controller.addUserBook);
app.put('/userbooks/:id', controller.editUserBook)

app.listen(config.port, () => { 
    console.log(`The server at port ${config.port} is live!`);
})
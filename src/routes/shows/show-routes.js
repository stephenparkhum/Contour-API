const shows = require('express').Router();
const showList = require('./shows-test.json');

shows
    .get('/', (req, res) => {
        res.send(showList)
    })
    .post('/', (req, res) => {
        console.log(req.body);
        res.send('Post is working');
});

module.exports = shows;
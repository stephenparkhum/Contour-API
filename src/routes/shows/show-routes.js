const shows = require('express').Router();
const showList = require('./shows-test.json');

shows.get('/', (req, res) => {
    res.send(showList);
});

module.exports = shows;
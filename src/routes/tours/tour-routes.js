const tours = require('express').Router();
const tourList = require('./tours-test.json');

tours.get('/', (req, res) => {
    res.send(tourList);
});

module.exports = tours;
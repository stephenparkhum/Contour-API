const routes = require('express').Router();
const shows = require('./shows/show-routes');

routes.get('/', (req, res) => {
    res
        .status(200)
        .json({message: 'Connected!'});
});

routes.use('/shows', shows);

module.exports = routes;
const routes = require('express').Router();
const shows = require('./shows/show-routes');
const tours = require('./tours/tour-routes');

routes.get('/', (req, res) => {
    res
        .status(200)
        .json({message: 'Connected!'});
});

routes.use('/api/shows', shows);
routes.use('/api/tours', tours);

module.exports = routes;
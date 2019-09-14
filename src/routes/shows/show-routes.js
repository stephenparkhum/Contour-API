const shows = require('express').Router();
const showList = require('./shows-test.json');

shows
    .get('/', (req, res) => {
        res.send(showList);
    })
    .post('/', (req, res) => {
        const {
            date,
            location,
            venue,
            venue_address,
            support_bands,
            load_in,
            load_out,
            set_time,
            guarantee,
            fb_event_link
        } = req.body;

        console.log(req.body);
        res.send(req.body);
});

module.exports = shows;
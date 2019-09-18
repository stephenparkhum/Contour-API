const express = require('express');
const shows = require('express').Router();
const showList = require('./shows-test.json');
const jsonParser = express.json();
const xss = require('xss');


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

        if (!date) {
            res
            .status(404)
            .send(`Show date is required!`);
        }

        console.log(req.body);
        res.send(req.body);
});

module.exports = shows;
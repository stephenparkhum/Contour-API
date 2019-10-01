const express = require('express');
const shows = require('express').Router();

const showList = [
    {
        "id": 1,
        "artist_id": 1,
        "date": "1/1/2020",
        "location": "Portland, OR",
        "venue": "Roseland Theater",
        "support_bands": ["Velnias", "Willowbrook"],
        "fb_event": "http://facebook.com",
        "tour_id": 1
    },
    {
        "id": 2,
        "artist_id": 1,
        "date": "1/2/2020",
        "location": "Eugene, OR",
        "venue": "The WOW Hall",
        "support_bands": ["Velnias", "Willowbrook"],
        "fb_event": "http://facebook.com",
        "tour_id": 1
    },
    {
        "id": 3,
        "artist_id": 1,
        "date": "1/3/2020",
        "location": "Salem, OR",
        "venue": "Graveyard Bar",
        "support_bands": ["Velnias", "Willowbrook"],
        "fb_event": "http://facebook.com",
        "tour_id": 2
    },
    {
        "id": 4,
        "artist_id": 1,
        "date": "1/4/2020",
        "location": "Seattle, WA",
        "venue": "Highline",
        "support_bands": ["Velnias", "Willowbrook"],
        "fb_event": "http://facebook.com",
        "tour_id": 2
    },
    {
        "id": 5,
        "artist_id": 1,
        "date": "1/5/2020",
        "location": "Spokane, WA",
        "venue": "Fake Venue",
        "support_bands": ["Velnias", "Willowbrook", "Jesus Band"],
        "fb_event": "http://facebook.com",
        "tour_id": 2
    }
]
;

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
        showList.push(req.body);
        res.send(req.body);
});

module.exports = shows;
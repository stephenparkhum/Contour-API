require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {
  CLIENT_ORIGIN
} = require('./config');
const routes = require('./routes/routes.js');

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

const PORT = process.env.PORT || 3000;
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting));

app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {
  app
};
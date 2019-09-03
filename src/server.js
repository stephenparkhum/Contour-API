 const express = require('express');
 const morgan = require('morgan');
 const app = express();
 const cors = require('cors');
 const {
   CLIENT_ORIGIN
 } = require('./config');

 app.use(
   cors({
     origin: CLIENT_ORIGIN
   })
 );

 const PORT = process.env.PORT || 3000;
 const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
 app.use(morgan(morganSetting))


 app.get('/api/*', (req, res) => {
   res.send('Your API route is working!');
 });

 app.get('/', (req, res) => {
   res.send('Your server is working!');
 });

 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

 module.exports = {
   app
 };
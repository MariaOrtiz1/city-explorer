const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationResponse } = require('./munge.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const { search } = req.query;

    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${search}&format=json`);
  
    const mungedData = mungeLocationResponse(data.body);
    res.json(mungedData);
  }
  catch(e) {
    res.status(500).json({ message: e.message });
  }
});

app.use(require('./middleware/error'));

module.exports = app;

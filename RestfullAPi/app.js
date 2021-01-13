const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

if(process.env.ENV === 'Test'){
  console.log('This is a test');
  const db = mongoose.connect('mongodb://localhost/bookAPI_Test');
} else {
  console.log('This is for real');
  const db = mongoose.connect('mongodb://localhost/bookAPI');
}

const port = process.env.PORT || 3000;
const bookRouter = require('./routes/bookRouter');

app.use(bodyParser.urlencoded({extendet:true}));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
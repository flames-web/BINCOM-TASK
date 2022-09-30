const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const ejsMate  = require('ejs-mate');

const pollingUnitRoute = require('./routes/pollingUnit');

app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));


const dbUrl = 'mongodb://localhost:27017/election';
//  process.env.DB_URL


mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', () => {
  console.log('Database Opened');
})

app.use(pollingUnitRoute);

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
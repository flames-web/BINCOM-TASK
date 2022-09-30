
require('dotenv').config();

const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const ejsMate  = require('ejs-mate');


app.engine('ejs',ejsMate);

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

const AppError = require('./utils/AppError');
const catchAsync = require('./utils/catchAsync');

const pollingUnitRoute = require('./routes/pollingUnit');

const dbUrl = process.env.DB_URL


mongoose.connect('mongodb://localhost:27017/election');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open', () => {
  console.log('Database Opened');
})

app.use(pollingUnitRoute);

app.use((err,req,res,next) => {
  const { status = 500 } =  AppError;
  if(!err.message) err.message = 'Oh something went wrong';
  res.status(status).render('error',{err});
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening on port 3000')
})
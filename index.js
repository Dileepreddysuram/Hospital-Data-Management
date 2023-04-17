require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");




const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());
app.use('/css',express.static(__dirname +'/css'));
app.use('/images',express.static(__dirname +'/images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/routes');

app.use('/api', routes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Appointment.html');
  });

  app.get('/getall', (req, res) => {
    res.sendFile(__dirname + '/getdata.html');
  });

  app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signin.html');
  });

  app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
  app.get('/aboutus.html', function(req, res) {
    res.sendFile(__dirname + '/aboutus.html');
  });
  app.get('/services.html', function(req, res) {
    res.sendFile(__dirname + '/services.html');
  });
  app.get('/doctors.html', function(req, res) {
    res.sendFile(__dirname + '/doctors.html');
  });
  app.get('/results.html', function(req, res) {
    res.sendFile(__dirname + '/results.html');
  });





  
  
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})




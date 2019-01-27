const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;


//check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

//check for DB errors
db.on('error', function(err){
  console.log(err);
});
//init app
var app = express();

let Movie = require('./models/movie');

//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//home route
app.get('/', function(req, res){
  Movie.find({}, function(err, movies){
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        title:'Movies',
        movies: movies
      });
    }
  });
});

//add route
app.get('/movies/add',function(req,res){
  res.render('add_movies',{
    title:''
  });
})

//start server
app.listen(3000,function(){
  console.log('Server started on port 3000');
});

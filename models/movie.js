var mongoose = require('mongoose');

//movie schema
let movieSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  director:{
    type: String,
    required:true
  }
});

let movie =module.exports = mongoose.model()

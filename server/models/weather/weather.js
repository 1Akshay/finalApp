var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining the mongoose schema for Movie collection
var weatherSchema   = new Schema({
  coord: {
      lon: String,
      lat: String
  },
  weather: [{
      id: String,
      main: String,
      description: String,
      icon: String
  }],
  base: String,
  main: {
      temp: Number,
      pressure: Number,
      humidity: Number,
      temp_min: Number,
      temp_max: Number
  },
  wind: {
      speed: Number,
      deg: Number
  },
rain : {"3h" : Number},

snow : {"3h" : Number},
  clouds: {
      all: Number
  },
  dt: String,
  sys: {
      type: Number,
      id: Number,
      message: String,
      country: String,
      sunrise: Number,
      sunset: Number
  },
  id: Number,
  name: String,
  cod: Number
});
module.exports = mongoose.model('Weather', weatherSchema);

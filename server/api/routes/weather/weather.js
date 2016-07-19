var express = require('express');
var router = express.Router();
var weather = require('../../../models/weather/weather');
var config=require('../../../config/config.json');
var app = express();
app.set('superSecret', config.secret);


router.route('/weather')
    .get(function(req, res){
      weather.find(function(err, movies) {
            if (err)
                res.send(err);
            res.json(movies);
        });
    })


      router.route('/weather/add')
        .post(function(req, res) {
          console.log("inside api add");
          console.log(req.body.name);
              var weatherObj = new weather({
              base : req.body.base,
              dt : req.body.dt,
              name : req.body.name
            });

              weatherObj.save(function(err) {
                  if (err)
                      res.send(err);
                  res.json({ message: 'Movie added!' });
                    });
                  });

router.route('/weather/findByName')
     .get(function(req,res){
       console.log("into the url1");
       weather.findOne({ 'name': req.body.name },function(err,weather){
         if(err)
         res.send(err);
         res.json(weather);
       });
     })
    module.exports= router;

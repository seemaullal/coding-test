'use strict';
var router = require('express').Router();
var request = require('request-promise');
module.exports = router;

router.use('/posts', require('./posts'));

router.get('/tracker/:fromDate/:toDate', function(req,res,next) {
    var trackerUrl = "http://kargotest.herokuapp.com/api/trackers";
    request({
        url: trackerUrl,
        qs: {from: req.params.fromDate, to: req.params.toDate},
        json: true
    }).then(function (body) {
        res.json(body);
    }).catch(function(err) {
        next(err); //call error handler
    });

});

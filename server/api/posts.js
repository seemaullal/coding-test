'use strict';
var router = require('express').Router();
var request = require('request-promise');
module.exports = router;

var postUrl = 'http://jsonplaceholder.typicode.com/posts'

router.get('/', function(req,res,next) {
    request({
        url: postUrl,
        json: true
    }).then(function (body) {
        res.json(body);
    }).catch(function (err) {
        next(err);
    });
});

router.get('/:id', function(req,res,next) {
    request({
        url: postUrl + '/' + req.params.id,
        json: true
    }).then(function (body) {
        res.json(body);
    }).catch(function (err) {
        next(err);
    });
});

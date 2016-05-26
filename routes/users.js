var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var cache = require('../libs/cache');


/* GET users listing. */
router.get('/signin', function (req, res, next) {

    console.log(req.originalUrl);
    var data = req.query;
    data.userId = 1;
    data.id = 1;
    data.userName = req.query.name;
    data.phone = req.query.phone;

    data.ticket = uuid.v1();
    console.log(data);
    req.rst.setResult(data);
    res.end(req.rst.toString())

});

router.get('/checkAuth', function (req, res, next) {

    console.log(req.originalUrl);
    var data = req.query;
    if (cache[data.ticket]) {
        data = cache[data.ticket] ;
    } else {
        cache.maxId += 1;
        data.userId = cache.maxId.toString();
        data.id = data.userId;
        //data.ticket = "19579c80-1d9a-11e6-89b0-3319d0f31fc4";
        data.phone = data.phone || '123456';
    }

    console.log(data);
    req.rst.setResult(data);
    res.end(req.rst.toString())

});

module.exports = router;

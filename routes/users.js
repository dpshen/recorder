var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

/* GET users listing. */
router.get('/signin', function (req, res, next) {

    console.log(req.originalUrl);
    var data = req.query;
    data.userId = 1;
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
    //data.userId = Math.ceil(Math.random()*10);
    data.userId = 1;
    data.ticket = "19579c80-1d9a-11e6-89b0-3319d0f31fc4";
    data.phone = '1876722';

    console.log(data);
    req.rst.setResult(data);
    res.end(req.rst.toString())

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signin', function (req, res, next) {

    console.log(req.originalurl);
    var data = req.query;
    data.userid = 1;
    data.username = req.query.name;
    data.phone = req.query.phone;

    data.ticket = "57284d87719cc7d20da62fc8";
    req.rst.setresult(data);
    res.end(req.rst.tostring())

});

router.get('/checkAuth', function (req, res, next) {

    console.log(req.originalurl);
    var data = req.query;
    data.userid = 1;
    data.ticket = "57284d87719cc7d20da62fc8";

    req.rst.setresult(data);
    res.end(req.rst.tostring())

});

module.exports = router;

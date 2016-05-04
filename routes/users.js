var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signIn', function (req, res, next) {

    console.log(req.originalUrl);
    var data = req.query;
    data.userId = 1;
    data.userName = req.query.name;
    data.phone = req.query.phone;

    data.ticket = "57284d87719cc7d20da62fc8";
    req.rst.setResult(data);
    res.end(req.rst.toString())

});

module.exports = router;

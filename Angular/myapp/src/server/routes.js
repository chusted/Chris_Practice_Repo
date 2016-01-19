var router = require('express').Router();
var four0four = require('./utils/404')();
//var data = require('./data');

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

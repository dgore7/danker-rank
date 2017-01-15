var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/game', function(req, res, next) {
  res.render('game', {
    title   : 'DankerRank',
    memeOne : global.state.memeOne,
    memeTwo : global.state.memeTwo,
    winner  : global.state.winner
  });
});

router.get('/', function(req, res, next) {
  res.render('index', {
    title   : 'DankerRank'
  });
});

module.exports = router;

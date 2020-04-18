const router = require('express').Router();

router.use('/boroughs', require('./boroughs'));

module.exports = router;
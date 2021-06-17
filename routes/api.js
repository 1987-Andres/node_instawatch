const router = require('express').Router();

const apiWatchesRouter = require('./api/watches');

router.use('/watches', apiWatchesRouter);


module.exports = router;
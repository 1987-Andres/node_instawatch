const router = require('express').Router();

const apiWatchesRouter = require('./api/watches');
const apiForoRouter = require('./api/foro');

router.use('/watches', apiWatchesRouter);
router.use('/foro', apiForoRouter);


module.exports = router;
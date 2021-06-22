const router = require('express').Router();

const { checkToken } = require('./middleware');

const apiWatchesRouter = require('./api/watches');
const apiForoRouter = require('./api/foro');
const apiUsersRouter = require('./api/users');

router.use('/watches', apiWatchesRouter);
router.use('/foro', apiForoRouter);
router.use('/users', apiUsersRouter);


module.exports = router;
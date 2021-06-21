const router = require('express').Router();

const { checkToken } = require('./middleware');

const apiWatchesRouter = require('./api/watches');
const apiForoRouter = require('./api/foro');
const apiUsersRouter = require('./api/users');

router.use('/watches', checkToken, apiWatchesRouter);
router.use('/foro', checkToken, apiForoRouter);
router.use('/users', apiUsersRouter);


module.exports = router;
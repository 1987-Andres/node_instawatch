const router = require('express').Router();

const { getAll } = require('../models/watches.model');

// GET http://localhost:3000/watches
router.get('/', async (req, res) => {

    // recuperar todos los clientes
    const watches = await getAll();
});

router.get('/:watchId', async (req, res) => {
    const watch = await getById(req.params.watchId);
    res.render('watch/detail', { watch });
});

module.exports = router;
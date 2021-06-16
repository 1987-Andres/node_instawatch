const router = require('express').Router();

const { getAll } = require('../models/watches.model');

// GET http://localhost:3000/watches
router.get('/', async (req, res) => {

    // recuperar todos los clientes
    const watches = await getAll();
});

// GET http://localhost:3000/watches/rolex
router.get('/:watchMarca', async (req, res) => {
    //recuperar clientes por id
    const watch = await getByMarca(req.params);
    res.render('watch/watch_brand', { watch });
});

// POST http://localhost:3000/watches/create
router.post('/create', (req, res) => {
    res.end('watches create');
});

module.exports = router;
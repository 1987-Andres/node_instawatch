const router = require('express').Router();
const { getAll, getByMarca, create } = require('../../models/watches.model');

router.get('/', async (req, res) => {
    try {
        const rows = await getAll()
        res.json(rows);
    } catch (err) {
        res.json({ error: 'TODO MAL!!!' })
    }
});

router.get('/:watchBrand', async (req, res) => {
    try {
        const watch = await getByMarca(req.params.watchBrand)
        if (watch) {
            res.json(watch);
        } else {
            res.json({ message: 'La marca del reloj no existe' });
        }
    } catch (error) {
        res.json({ error: 'No funciona' });
    }
});

router.post('/', async (req, res) => {
    const result = await create(req.body);
    res.json(result);
});

module.exports = router;

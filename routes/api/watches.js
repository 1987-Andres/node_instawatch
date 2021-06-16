const router = require('express').Router();
const { getAll, getById } = require('../../models/watches.model');

router.get('/', async (req, res) => {
    try {
        const rows = await getAll()
        res.json(rows);
    } catch (err) {
        res.json({ error: 'TODO MAL!!!' })
    }
});

router.get('/:watchId', async (req, res) => {
    try {
        const watch = await getById(req.params.watchId)
        if (watch) {
            res.json(watch);
        } else {
            res.json({ message: 'El id del reloj no existe' });
        }
    } catch (error) {
        res.json({ error: 'No funciona' });
    }
});
module.exports = router;

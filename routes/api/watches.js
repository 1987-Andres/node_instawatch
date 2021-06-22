const router = require('express').Router();
const { getAll, getByMarca, create, getById, getByUser } = require('../../models/watches.model');
const { checkToken } = require('../middleware');

router.get('/', async (req, res) => {
    try {
        const rows = await getAll()
        res.json(rows);
    } catch (err) {
        res.json({ error: 'TODO MAL!!!' })
    }
});

router.get('/:watchId', async (req, res) => {
    const reloj = await getById(req.params.watchId);
    res.json(reloj);
})

router.get('/marca/:watchBrand', async (req, res) => {
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

router.post('/', checkToken, async (req, res) => {
    console.log(req.user);
    req.body.fk_owner = req.user.id
    const result = await create(req.body);
    res.json(result);
});

router.get('/usuario/:fk_user', checkToken, async (req, res) => {
    const relojes = await getByUser(req.params.fk_user);
    res.json(relojes);
})





module.exports = router;

const router = require('express').Router();
const { getAllPosts, getByCategoria, createPost } = require('../../models/foro.model');

router.get('/', async (req, res) => {
    try {
        const rows = await getAllPosts()
        res.json(rows);
    } catch (err) {
        res.json({ error: 'TODO MAL!!!' })
    }
});

router.get('/:categoria', async (req, res) => {
    try {
        const categoria = await getByCategoria(req.params.categoria)
        if (categoria) {
            res.json(categoria);
        } else {
            res.json({ message: 'La categoria no existe' });
        }
    } catch (error) {
        res.json({ error: 'No funciona' });
    }
});

router.post('/', async (req, res) => {
    const result = await createPost(req.body);
    res.json(result);
});





module.exports = router;
const router = require('express').Router();
const { getAllPosts, getByCategoria, createPost, update, deleteById, getById, createRespuesta, getRespuestasId, getRespuestasfk } = require('../../models/foro.model');
const { checkToken } = require('../middleware');

router.get('/', async (req, res) => {
    try {
        const rows = await getAllPosts()
        res.json(rows);
    } catch (err) {
        res.json({ error: 'TODO MAL!!!' })
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const post = await getById(req.params.id)
        const respuestas = await getRespuestasfk(req.params.id)
        post.respuestas = respuestas;
        if (post) {
            res.json(post);
        } else {
            res.json({ message: 'El post no existe' });
        }
    } catch (error) {
        res.json({ error: 'No funciona' });
    }
});

router.get('/respuesta/:id', async (req, res) => {
    try {
        const id = await getRespuestasId(req.params.id)
        if (id) {
            res.json(id);
        } else {
            res.json({ message: 'El id no existe' });
        }
    } catch (error) {
        res.json({ error: 'No funciona' });
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
    console.log(req.body);
    const result = await createPost(req.body);
    res.json(result);
});

router.post('/respuesta', async (req, res) => {
    const post = await getById(req.params.id)
    const result = await createRespuesta(req.body);
    post.respuestas = respuestas;
    res.json(result);
});

router.put('/:postId', async (req, res) => {
    try {
        const result = await update(req.params.postId, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:postId', async (req, res) => {
    const result = await deleteById(req.params.postId);
    res.json(result);
});




module.exports = router;
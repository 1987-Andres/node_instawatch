const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const { getById } = require('../models/users.model');

const checkToken = async (req, res, next) => {

    if (!req.headers['authorization']) {
        return res.json({ error: 'Necesitas la cabecera Authorization' });
    }

    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'token creado');
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' })
    }

    const currentDate = dayjs().unix();
    if (currentDate > obj.caducidad) {
        return res.json({ error: 'El token está caducado. Pide otro' });
    }

    const usuario = await getById(obj.usuario_id);

    req.user = usuario;

    next();
}

module.exports = { checkToken };
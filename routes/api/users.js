const { createClient, getByEmail } = require('../../models/users.model');

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const { checkToken } = require('../middleware');

router.post('/registro', [
  body('nombre', 'El campo nombre debe estar incluido. Con logintud mínima de 3 caracteres').exists().isLength({ min: 3 }),
  body('email', 'El email debe tener un formato correcto').isEmail()
], async (req, res) => {


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const usuario = await getByEmail(req.body.email);
  if (usuario) {
    return res.json({ error: 'El email ya se encuentra registrado' });
  }

  req.body.password = bcrypt.hashSync(req.body.password, 10);

  createClient(req.body)
    .then(result => res.json(result))
    .catch(error => console.log(error));
});

router.post('/login', async (req, res) => {

  const usuario = await getByEmail(req.body.email);
  if (!usuario) {
    return res.json({ error: 'error en email y/o password 1' });
  }


  const iguales = bcrypt.compareSync(req.body.password, usuario.password);
  console.log(req.body.password);
  if (iguales) {
    res.json({ success: 'Perfecto', token: createToken(usuario) });
  } else {
    res.json({ error: 'error en email y/o password 2' });
  }

});

router.get('/perfil', checkToken, (req, res) => {
  res.json(req.user);
});

function createToken(pUsuario) {
  const obj = {
    usuario_id: pUsuario.id,
    caducidad: dayjs().add(7, 'days').unix()
  }
  return jwt.sign(obj, 'token creado');
}

module.exports = router;
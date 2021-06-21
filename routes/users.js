var express = require('express');
var router = express.Router();
const Users = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const moment = require('moment');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await Users.getAll();
  res.json(users);
});

router.post('/register', async (req, res) => {
  console.log(req.body);
  req.body.password = brypt.hashSync(req.body.password, 10);
  const result = await users.createClient(req.body);
  res.json(result);
});


module.exports = router;

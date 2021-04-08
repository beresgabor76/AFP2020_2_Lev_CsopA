const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  let user = await User.findOne({ name: req.body.name });
  if (!user) return res.send({status: 400, message: 'Hibás név vagy jelszó!'});

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.send({status: 400, message: 'Hibás név vagy jelszó!'});

  const token = user.generateAuthToken();
  res.send({status: 200, message: token});
});

function validate(req) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(255).required()
  });
  return schema.validate(req);
}

module.exports = router; 
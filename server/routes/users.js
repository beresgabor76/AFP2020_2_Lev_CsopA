const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const regauth = require('../middleware/regauth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { User, validate} = require('../models/user');
const express = require('express');
const router = express.Router();
  
  router.get('/', [auth, admin], async (req, res) => {
    const users = await User.find().sort('name'); 
    res.send({status: 200, message: users});
  });
  
  router.get('/:name', [auth, admin], async (req, res) => {
    const user = await User.find({ name: req.params.name });
    if (!user) return res.send({status: 404, message: 'A megadott feltöltő nem található.'});
    res.send({status: 200, message: user});
  });

  router.post('/', regauth, async (req, res) => {
    const { error } = validate(req.body);     
    if (error) return res.send({status: 400, message: error.message});
    
    let user = await User.findOne({ name: req.body.name });
    if (user) return res.send({status: 409, message: 'A megadott néven már van regisztrálva felhasználó.'});

    user = await User.findOne({ email: req.body.email });
    if (user) return res.send({status: 409, message: 'A megadott email címen már van regisztrálva felhasználó.'});    

    user = new User(_.pick(req.body, ['name', 'email', 'password', 'admin', 'languages', 'uploads']));
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
  
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send({ status: 200, message: _.pick(user, ['name']) + ' néven regisztáltva lett.' });
  });

  router.put('/:name', auth, async (req, res) => {
    if (req.user.name != req.body.name) 
        return res.send({status: 403, message: 'Hozzáférés megtagadva jogosultság hiányában.'});

    const { error } = validate(req.body); 
    if (error) return res.send({status: 400, message: error.message});  
    
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    
    const user = await User.findOneAndUpdate({ name: req.params.name }, 
        { email: req.body.email,  password: password }, {new: true, useFindAndModify: false});
    if (!user) return res.send({status: 404, message: 'A megadott feltöltő nem található.'});        
    res.send({status: 200, message: user});
  });

  router.delete('/:name', [auth, admin], async (req, res) => {
    const user = await User.findOneAndDelete({name: req.params.name},{ useFindAndModify: false });  
    if (!user) return res.send({status: 404, message: 'A megadott feltöltő nem található.'});  
    res.send({status: 200, message: user});
  });
    
  module.exports = router;
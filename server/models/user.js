const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1024
  },
  admin: {
    type: Boolean,
    default: false
  },
  languages: {
    type: Array,
    validate: {
      validator: function(v) {
        return v.length > 0 && v.every(function(e) { return typeof(e) == 'string'; });
      },
      message: 'Languages must be set.'
    }
  },
  uploads: {
    type: Number,
    default: 0  
  }
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ name: this.name, admin: this.admin }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required().messages({
        'string.min': 'A név minimum 5 karakter hosszú legyen!',
        'string.max': 'A név maximum 50 karakter hosszú lehet!',        
        'string.empty': 'Egy nevet kötelező megadni a regisztrációhoz!',
        'any.required': 'Egy nevet kötelező megadni a regisztrációhoz!'
      }),
      email: Joi.string().min(5).max(255).email().required().messages({
        'string.min': 'Az e-mail cím minimum 5 karakter hosszú legyen!',
        'string.max': 'Az e-mail cím maximum 255 karakter hosszú lehet!',
        'string.email': 'Az e-mail cím érvénytelen formátumú!',
        'string.empty': 'Egy e-mail címet kötelező megadni a regisztrációhoz!',
        'any.required': 'Egy e-mail címet kötelező megadni a regisztrációhoz!'
      }),
      password: Joi.string().min(5).max(20).regex(/^[\S]{5,20}$/).required().messages({
        'string.min': 'A jelszó minimum 5 karakter hosszú legyen!',
        'string.max': 'A jelszó maximum 20 karakter hosszú lehet!',
        'string.pattern.base': 'A jelszó nem tartalmazhat szóközt vagy whitespace karaktereket!',
        'string.empty': 'Egy jelszót kötelező megadni a regisztrációhoz!',
        'any.required': 'Egy jelszót kötelező megadni a regisztrációhoz!'
      }),
      admin: Joi.boolean().default(false),
      languages: Joi.array().min(1).items(
        Joi.string().regex(/^[a-záéíóöőüű]{3,25}$/).messages(
          {'string.pattern.base': 'A megadott nyelvek kisbetűs szavak lehetnek, min. 3 max. 25 hosszúak!'})        
        ).required().messages({'array.min': 'Minimum egy beszélt nyelvet meg kell adni!'})      
    });
  
    return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User; 
exports.validate = validateUser;
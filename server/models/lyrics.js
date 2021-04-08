const Joi = require('joi');
const mongoose = require('mongoose');

const lyricsSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50        
    },
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100        
    },
    album: {
        type: String,        
        maxlength: 100        
    },
    language: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25        
    },
    lyricsOriginal: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 5000        
    },
    lyricsHungarian: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 5000        
    },
    uploader: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50        
    },
    inspector: {
        type: String,        
        minlength: 5,
        maxlength: 50        
    },
    approved: {
        type: Boolean,
        default: false
    },
    refused: {
        type: Boolean,
        default: false
    },
    remark: {
        type: String,                
        maxlength: 500        
    },
    dateOfUpload: {
        type: Date                
    },
    timesOfDownload: {
        type: Number,
        default: 0
    }
});

const Lyrics = mongoose.model('Lyrics', lyricsSchema);

function validateLyrics(lyrics) {
    const schema = Joi.object({
      artist: Joi.string().min(2).max(50).required().messages({        
        'string.min': 'Az előadó neve minimum 2 karakter hosszú legyen!',
        'string.max': 'Az előadó neve maximum 50 karakter hosszú lehet!',
        'string.empty': 'Egy előadót kötelező megadni a feltöltéshez!',
        'any.required': 'Egy előadót kötelező megadni a feltöltéshez!'
      }),
      title: Joi.string().min(3).max(100).required().messages({
        'string.min': 'A zeneszám címe minimum 3 karakter hosszú legyen!',
        'string.max': 'A zeneszám címe maximum 100 karakter hosszú lehet!',        
        'string.empty': 'Egy címet kötelező megadni a dalszöveg feltöltéshez!',
        'any.required': 'Egy címet kötelező megadni a dalszöveg feltöltéshez!'
      }),
      album: Joi.string().allow('').allow(null).min(0).max(100).messages({        
        'string.max': 'Az album címe maximum 100 karakter hosszú lehet!'
      }),
      language: Joi.string().min(3).max(50).required().messages({
        'string.min': 'A dalszöveg nyelve minimum 3 karakter hosszú legyen!',
        'string.max': 'A dalszöveg nyelve maximum 50 karakter hosszú lehet!',        
        'string.empty': 'Egy nyelvet kötelező megadni a dalszöveg feltöltéshez!',
        'any.required': 'Egy nyelvet kötelező megadni a dalszöveg feltöltéshez!'
      }),
      lyricsOriginal: Joi.string().min(50).max(5000).required().messages({
        'string.min': 'Az eredeti dalszöveg minimum 50 karakter hosszú legyen!',
        'string.max': 'Az eredeti dalszöveg maximum 5000 karakter hosszú lehet!',        
        'string.empty': 'Az eredeti dalszöveg kitöltése kötelező a feltöltéshez!',
        'any.required': 'Az eredeti dalszöveg kitöltése kötelező a feltöltéshez!'
      }),
      lyricsHungarian: Joi.string().min(50).max(5000).required().messages({
        'string.min': 'A magyar nyelvű dalszöveg minimum 50 karakter hosszú legyen!',
        'string.max': 'A magyar nyelvű dalszöveg maximum 5000 karakter hosszú lehet!',        
        'string.empty': 'A magyar nyelvű dalszöveg kitöltése kötelező a feltöltéshez!',
        'any.required': 'A magyar nyelvű dalszöveg kitöltése kötelező a feltöltéshez!'
      })      
    });
    return schema.validate(lyrics);
}

exports.Lyrics = Lyrics; 
exports.validate = validateLyrics;
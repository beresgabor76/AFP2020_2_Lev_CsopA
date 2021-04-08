const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const _ = require('lodash');
const mongoose = require('mongoose');
const { Lyrics, validate} = require('../models/lyrics');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

Date.prototype.addHours = function(h){
    this.setHours(this.getHours()+h);
    return this;
}

router.post('/', auth, async (req, res) => {    
    const { error } = validate(req.body); 
    if (error) return res.send({status: 400, message: error.message});  
    
    let lyrics = new Lyrics(_.pick(req.body, ['artist', 'title', 'album', 'language', 
        'lyricsOriginal', 'lyricsHungarian']));    
    lyrics.uploader = req.user.name;
    lyrics.dateOfUpload = new Date().addHours(1);    
    await lyrics.save();

    res.send({status: 200, message: _.pick(lyrics, ['artist', 'title'])});
});

router.get('/latest', async (req, res) => {
    let pageSize = 10;
    let pageNumber = 1;
    if (_.has(req.query, 'pageSize')) pageSize = _.parseInt(req.query.pageSize);
    if (_.has(req.query, 'pageNumber')) pageNumber = _.parseInt(req.query.pageNumber);    
    
    const lyricsList = await Lyrics.find({ approved: true })
                .sort({ dateOfUpload: -1, artist: 1, album: 1, title: 1 })
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .select({ _id: 1, artist: 1, title: 1, album: 1, 
                    dateOfUpload: 1}); // {$dateToString: { date: "$dateOfUpload", format: "%Y.%m.%d. %H:%M"}}});
    
    res.send({status: 200, message: lyricsList});
});

router.get('/popular', async (req, res) => {
    let pageSize = 10;
    let pageNumber = 1;
    if (_.has(req.query, 'pageSize')) pageSize = _.parseInt(req.query.pageSize);
    if (_.has(req.query, 'pageNumber')) pageNumber = _.parseInt(req.query.pageNumber);

    const lyricsList = await Lyrics.find({ approved: true })
                .sort({ timesOfDownload: -1, artist: 1, album: 1, title: 1 })
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .select({ _id: 1, artist: 1, title: 1, album: 1, timesOfDownload: 1 });
    
    res.send({status: 200, message: lyricsList});
});

router.get('/search', async (req, res) => {    
    const search = new Array();    
    if (_.has(req.query, 'artist')) {
        let re = new RegExp(`${req.query.artist}`, 'gi');
        search.push({ artist: re });
    }
    if (_.has(req.query, 'title')) {
        let re = new RegExp(`${req.query.title}`, 'gi');
        search.push({ title: re });
    }
    if (_.has(req.query, 'album')) {
        let re = new RegExp(`${req.query.album}`, 'gi');
        search.push({ album: re });
    }
    if (_.has(req.query, 'text')) {
        let re = new RegExp(`${req.query.text}`, 'gi');
        search.push({ lyricsOriginal: re });
    }    
    if (search.length == 0) 
        return res.send({status: 400, message: 'Nincs megadva keresési szempont.'});

    let pageSize = 25;
    let pageNumber = 1;
    if (_.has(req.query, 'pageSize')) pageSize = _.parseInt(req.query.pageSize);
    if (_.has(req.query, 'pageNumber')) pageNumber = _.parseInt(req.query.pageNumber);

    const lyricsList = await Lyrics.find({ approved: true })
                .and(search)    
                .sort({ artist: 1, album: 1, title: 1 })                            
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)                
                .select({ _id: 1, artist: 1, title: 1, album: 1 });
    
    res.send({status: 200, message: lyricsList});
});

router.get('/inspect', [auth, admin], async (req, res) => {
    const result = await User.findOne({ name: req.user.name })
                                .select({ languages: 1 })
    const languages = result.languages;

    const lyricsList = await Lyrics
            .find({ approved: false, refused: false, language: { $in: languages } })
            .sort({ dateOfUpload: 1, artist: 1, title: 1 })
            .limit(15)
            .select({ _id: 1, artist: 1, title: 1, language: 1, dateOfUpload: 1, uploader: 1 });
    
    res.send({status: 200, message: lyricsList});
});

router.get('/download/:id', async (req, res) => {
    const lyrics = await Lyrics.findByIdAndUpdate(req.params.id, { $inc: { timesOfDownload: 1 } },
                                                 { new: true, useFindAndModify: false});
    if (!lyrics) res.send({status: 404, message: 'A megadott dalszöveg nem található!'});
    res.send({status: 200, message: lyrics});
});

router.put('/approve/:id', [auth, admin], async (req, res) => {
    const lyrics = await Lyrics.findByIdAndUpdate(req.params.id, 
        { approved: true, refused: false, inspector: req.user.name, remark: "" }, 
        { new: true, useFindAndModify: false });
    if (!lyrics) res.send({status: 404, message: 'A megadott dalszöveg nem található!'});
    const user = await User.findOneAndUpdate({ name: lyrics.uploader },
        { $inc: { uploads: 1 }}, { useFindAndModify: false });
    res.send({status: 200, message: lyrics});
});

router.put('/refuse/:id', [auth, admin], async (req, res) => {
    const remark = _.has(req.body, 'remark') ? req.body.remark : "";
    const lyrics = await Lyrics.findByIdAndUpdate(req.params.id, 
        { approved: false, refused: true, inspector: req.user.name, remark: remark }, 
        { new: true, useFindAndModify: false });
    if (!lyrics) res.send({status: 404, message: 'A megadott dalszöveg nem található!'});
    res.send({status: 200, message: lyrics});
});

router.get('/revise', auth, async (req, res) => {
    const lyricsList = await Lyrics
            .find({ approved: false, refused: true, uploader: req.user.name})
            .sort({ dateOfUpload: 1, artist: 1, title: 1 })            
            .select({ _id: 1, artist: 1, title: 1, language: 1, dateOfUpload: 1,
                    inspector: 1, remark: 1 });
    
    res.send({status: 200, message: lyricsList});
});


router.put('/revise/:id', auth, async (req, res) => {          
    let lyrics = await Lyrics.findById(req.params.id);    
    if (!lyrics) res.send({status: 404, message: 'A megadott dalszöveg nem található!'});

    if (lyrics.uploader != req.user.name) 
        return res.send({status: 403, message: 'Hozzáférés megtagadva jogosultság hiányában.'});
    
    let revised = _.pick(req.body, ['artist', 'title', 'album', 'language',
                                    'lyricsOriginal', 'lyricsHungarian']);
    const { error } = validate(revised); 
    if (error) return res.send({status: 400, message: error.message}); 

    lyrics.artist = revised.artist;
    lyrics.title = revised.title;
    if (_.has(req.body, 'album')) lyrics.album = revised.album;
    lyrics.lyricsOriginal = revised.lyricsOriginal;
    lyrics.lyricsHungarian = revised.lyricsHungarian;
    lyrics.refused = false;
    lyrics.approved = false;
    lyrics.dateOfUpload = new Date().addHours(1);
    
    const result = await lyrics.save();
    res.send({status: 200, message: result});
});

module.exports = router;
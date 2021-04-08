module.exports = function (req, res, next) { 
        
    if (!req.user.admin) return res.send({status: 403, message: 'Hozzáférés megtagadva jogosultság hiányában.'});  
    next();
}
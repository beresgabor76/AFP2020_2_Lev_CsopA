const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  if (req.body.admin == true)
  {
    const token = req.header('x-auth-token');
    if (!token) 
      return res.send({status: 401, message: 'Hozzáférés megtagadva hiányzó token miatt.'});

    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        const now = new Date().valueOf();
        if (now - decoded.iat * 1000 > 30*60*1000)
        return res.send({status: 401, message: 'Hozzáférés megtagadva lejárt token miatt.'});
        req.user = decoded; 
        if (!req.user.admin) 
          return res.send({status: 403, message: 'Sikertelen regisztráció jogosultság hiányában.'});  
        next();
    }
    catch (ex) {
      res.send({status: 401, message: 'Érvénytelen token.'});
    }
  }
  else
  {
    next();
  }
}
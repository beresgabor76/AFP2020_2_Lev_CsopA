const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');  
  if (!token) return res.send({status: 401, message: 'Hozzáférés megtagadva hiányzó token miatt.'});

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    const now = new Date().valueOf();    
    if (now - decoded.iat * 1000 > 30*60*1000)
      return res.send({status: 401, message: 'Hozzáférés megtagadva lejárt token miatt.'});
    req.user = decoded;    
    next();
  }
  catch (ex) {
    res.send({status: 401, message: 'Érvénytelen token.'});
  }
}
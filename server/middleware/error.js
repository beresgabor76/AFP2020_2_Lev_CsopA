const winston = require('winston');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),        
        winston.format.prettyPrint()
    ),
    transports: [
      new winston.transports.Console(),      
      new winston.transports.File({ filename: 'logfile.log' })
    ]
});

const errorHandler = function(err, req, res, next){
    logger.error(err.message, {err});
    res.send({status: 500, message: 'Hiba történt a kiszolgáló oldalon.'});
}

module.exports.errorHandler = errorHandler;
module.exports.logger = logger;
require('express-async-errors');
const error = require('./middleware/error')
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./routes/users');
const auth = require('./routes/auth');
const lyrics = require('./routes/lyrics');

process.on('uncaughtException', (ex) => {
    error.logger.error(ex.message, {ex});
    process.exit(1);
});

process.on('unhandledRejection', (ex) => {
    error.logger.error(ex.message, {ex});
    process.exit(1);
});

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey nincs definiálva.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/lyrics', 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/lyrics', lyrics);
app.use(error.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
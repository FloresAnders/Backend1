const {DATABASE_PROPERTIES, GOOGLE_URL, TOKEN_SECRET} = require('./constants');
const {cors} = require('./cors');
const {initialize, buildConnection} = require('./database');
const {encryptPassword, comparePassword} = require('./password');

module.exports = {
    DATABASE_PROPERTIES,
    GOOGLE_URL,
    TOKEN_SECRET,
    cors,
    initialize,
    buildConnection,
    encryptPassword,
    comparePassword
};
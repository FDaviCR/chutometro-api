const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Log = require('./Log');

const db = {
    sequelize,
    Usuario,
    Log,
};

module.exports = db;
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

const db = {
    sequelize,
    Usuario,
};

module.exports = db;
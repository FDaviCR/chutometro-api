const { Usuario } = require('../models');

class UsuarioService {
    static async create(data) {
        return Usuario.create(data);
    }


    static async findAll() {
        return Usuario.findAll();
    }
}

module.exports = UsuarioService;
const UsuarioService = require('../services/UsuarioService');
const LogService = require('../services/LogService');


class UsuarioController {
    static async store(req, res, next) {
        try {
            const Usuario = await UsuarioService.create(req.body);


            await LogService.create({
                action: 'Criou usuário',
                UsuarioId: Usuario.id,
            });


            res.status(201).json(Usuario);
        } catch (err) {
            next(err);
        }
    }


    static async index(req, res, next) {
        try {
            const Usuarios = await UsuarioService.findAll();
            res.json(Usuarios);
        } catch (err) {
            next(err);
        }
    }
}


module.exports = UsuarioController;
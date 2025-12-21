const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.post('/usuarios', UsuarioController.store);
router.get('/usuarios', UsuarioController.index);


module.exports = router;
const express = require('express');
const router = express.Router();
const controllerUsuario = require('../controllers/usuarioController');
router.get('/obter/', controllerUsuario.obter);
router.post('/logar/', controllerUsuario.logar);
module.exports = router;
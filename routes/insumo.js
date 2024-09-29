const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');

// Mostrar todos los insumos
router.get('/', insumoController.mostrarInsumos);

// Crear un nuevo insumo
router.post('/agregar', insumoController.crearInsumo);

// Editar un insumo
router.post('/actualizar/:id', insumoController.actualizarInsumo);

// Eliminar un insumo
router.post('/eliminar/:id', insumoController.eliminarInsumo);

// Mostrar el formulario para agregar insumo
router.get('/agregar', insumoController.mostrarFormularioAgregarInsumo);

// Mostrar el formulario para edutar el insumo
router.get('/editar/:id', insumoController.mostrarFormularioEditarInsumo);


module.exports = router;

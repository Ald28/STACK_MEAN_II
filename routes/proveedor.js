const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Mostrar todos los proveedores
router.get('/', proveedorController.mostrarProveedores);

// Mostrar formulario para agregar proveedor
router.get('/agregar', (req, res) => res.render('agregarProveedor'));

// Agregar un nuevo proveedor
router.post('/agregar', proveedorController.crearProveedor);

// Mostrar formulario para editar proveedor
router.get('/editar/:id', proveedorController.mostrarFormularioEditar);

// Editar proveedor
router.post('/editar/:id', proveedorController.actualizarProveedor);

// Eliminar proveedor
router.post('/eliminar/:id', proveedorController.eliminarProveedor);

module.exports = router;

const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Mostrar todos los clientes
router.get('/', clienteController.mostrarClientes);

// Formulario para agregar cliente
router.get('/agregar', clienteController.mostrarFormularioAgregar);

// Agregar cliente
router.post('/agregar', clienteController.agregarCliente);

// Formulario para editar cliente
router.get('/editar/:id', clienteController.mostrarFormularioEditar);

// Editar cliente
router.post('/editar/:id', clienteController.editarCliente);

// Eliminar cliente
router.post('/eliminar/:id', clienteController.eliminarCliente);

module.exports = router;

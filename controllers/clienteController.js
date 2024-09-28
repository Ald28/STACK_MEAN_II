const Cliente = require('../models/cliente');

// Mostrar todos los clientes
const mostrarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.render('index', { clientes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mostrar formulario para agregar cliente
const mostrarFormularioAgregar = (req, res) => {
  res.render('agregarCliente');
};

// Agregar cliente
const agregarCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mostrar formulario para editar cliente
const mostrarFormularioEditar = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.render('editarCliente', { cliente });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar cliente
const editarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  mostrarClientes,
  mostrarFormularioAgregar,
  agregarCliente,
  mostrarFormularioEditar,
  editarCliente,
  eliminarCliente
};

const Proveedor = require('../models/proveedores');

// Mostrar todos los proveedores
const mostrarProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.render('proveedores', { proveedores });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo proveedor
const crearProveedor = async (req, res) => {
    const proveedor = new Proveedor(req.body);
    try {
        await proveedor.save();
        res.redirect('/proveedor');  
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mostrar formulario de edición de proveedor
const mostrarFormularioEditar = async (req, res) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findById(id);
        res.render('editarProveedor', { proveedor });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un proveedor
const actualizarProveedor = async (req, res) => {
    const { id } = req.params;
    const proveedor = req.body;

    try {
        const updatedProveedor = await Proveedor.findByIdAndUpdate(id, proveedor, { new: true });
        res.redirect('/proveedor');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Eliminar un proveedor
const eliminarProveedor = async (req, res) => {
    const { id } = req.params;

    try {
        await Proveedor.findByIdAndDelete(id);
        res.redirect('/proveedor');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { mostrarProveedores, crearProveedor, mostrarFormularioEditar, actualizarProveedor, eliminarProveedor };

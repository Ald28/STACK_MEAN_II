const Insumo = require('../models/insumo');
const Proveedor = require('../models/proveedores');

// Mostrar la lista de insumos
const mostrarInsumos = async (req, res) => {
    try {
        const insumos = await Insumo.find().populate('idprovedor', 'nombrecia');
        res.render('insumo', { insumos }); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo insumo
const crearInsumo = async (req, res) => {
    const { nominsumo, idprovedor, preUni, stock } = req.body;
    
    try {
        const proveedor = await Proveedor.findById(idprovedor);
        if (!proveedor) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }
        const nuevoInsumo = new Insumo({
            nominsumo,
            idprovedor,
            preUni,
            stock
        });

        await nuevoInsumo.save();
        res.redirect('/insumo');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mostrar el formulario para agregar un insumo
const mostrarFormularioAgregarInsumo = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.render('agregarInsumo', { proveedores });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Mostrar el formulario de edición de insumo
const mostrarFormularioEditarInsumo = async (req, res) => {
    const { id } = req.params;

    try {
        const insumo = await Insumo.findById(id).populate('idprovedor'); 
        const proveedores = await Proveedor.find();

        if (!insumo) {
            return res.status(404).json({ error: 'Insumo no encontrado' });
        }

        res.render('editarInsumo', { insumo, proveedores });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un insumo
const actualizarInsumo = async (req, res) => {
    const { id } = req.params;
    const { nominsumo, idprovedor, preUni, stock } = req.body;

    try {
        const insumoActualizado = await Insumo.findByIdAndUpdate(id, {
            nominsumo,
            idprovedor,
            preUni,
            stock
        }, { new: true });

        res.redirect('/insumo');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Eliminar un insumo
const eliminarInsumo = async (req, res) => {
    const { id } = req.params;

    try {
        await Insumo.findByIdAndDelete(id);
        res.redirect('/insumo');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { mostrarInsumos, crearInsumo, actualizarInsumo, eliminarInsumo, mostrarFormularioAgregarInsumo, mostrarFormularioEditarInsumo };

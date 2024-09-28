const Insumo = require('../models/insumo');
const Proveedor = require('../models/proveedores');

// Mostrar la lista de insumos
const mostrarInsumos = async (req, res) => {
    try {
        const insumos = await Insumo.find().populate('idprovedor', 'nombrecia'); // Relacionar con proveedor
        res.render('insumo', { insumos }); // Renderizar la vista de insumos
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo insumo
const crearInsumo = async (req, res) => {
    const { nominsumo, idprovedor, preUni, stock } = req.body;

    try {
        // Verificar que el proveedor existe
        const proveedor = await Proveedor.findById(idprovedor);
        if (!proveedor) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }

        // Crear el insumo si el proveedor existe
        const nuevoInsumo = new Insumo({
            nominsumo,
            idprovedor,
            preUni,
            stock
        });

        await nuevoInsumo.save();
        res.redirect('/insumo');  // Redirige a la lista de insumos
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mostrar el formulario para agregar un insumo
const mostrarFormularioAgregarInsumo = async (req, res) => {
    try {
        const proveedores = await Proveedor.find(); // Obtener todos los proveedores
        res.render('agregarInsumo', { proveedores }); // Renderizar la vista con los proveedores
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Mostrar el formulario de edición de insumo
const mostrarFormularioEditarInsumo = async (req, res) => {
    const { id } = req.params;

    try {
        const insumo = await Insumo.findById(id).populate('idprovedor'); // Obtener el insumo por ID y el proveedor relacionado
        const proveedores = await Proveedor.find(); // Obtener todos los proveedores

        if (!insumo) {
            return res.status(404).json({ error: 'Insumo no encontrado' });
        }

        res.render('editarInsumo', { insumo, proveedores }); // Renderizar la vista de edición con el insumo y proveedores
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
        
        res.redirect('/insumo');  // Redirige a la lista de insumos después de actualizar
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// Eliminar un insumo
const eliminarInsumo = async (req, res) => {
    const { id } = req.params;

    try {
        await Insumo.findByIdAndDelete(id);
        res.redirect('/insumo'); // Redirigir a la lista de insumos después de eliminar
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { mostrarInsumos, crearInsumo, actualizarInsumo, eliminarInsumo, mostrarFormularioAgregarInsumo, mostrarFormularioEditarInsumo };

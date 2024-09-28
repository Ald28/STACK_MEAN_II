const express = require('express');
const app = express();
const clienteRouter = require('./routes/cliente');
const proveedorRouter = require('./routes/proveedor'); // Importar las rutas de proveedores
require('./models/db'); // Conexión a MongoDB
const insumoRoutes = require('./routes/insumo');

// Configurar la carpeta public para archivos estáticos
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Rutas
app.use('/', clienteRouter);
app.use('/proveedor', proveedorRouter); // Usar las rutas de proveedores
app.use('/insumo', insumoRoutes);

// Iniciar servidor
app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
});
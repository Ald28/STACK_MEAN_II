const express = require('express');
const app = express();
const clienteRouter = require('./routes/cliente');
const proveedorRouter = require('./routes/proveedor');
const insumoRoutes = require('./routes/insumo');

require('./models/db');

// archivos estáticos
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Rutas
app.use('/', clienteRouter);
app.use('/proveedor', proveedorRouter);
app.use('/insumo', insumoRoutes);

// servidor
app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
});
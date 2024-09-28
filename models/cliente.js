const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema(
    {
        nombre: String,
        apellidos: String,
        direccion: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('clientes', clienteSchema);
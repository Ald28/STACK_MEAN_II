const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insumoSchema = new Schema(
    {
        nominsumo: { type: String, required: true },
        idprovedor: { type: Schema.Types.ObjectId, ref: 'provedores', required: true },
        preUni: { type: Number, required: true },
        stock: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('insumo', insumoSchema);

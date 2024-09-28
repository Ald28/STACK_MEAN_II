const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provedoresSchema = new Schema(
    {
        nombrecia: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('provedores', provedoresSchema);
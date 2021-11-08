const mongoose = require('mongoose');

const estadosSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    regiao:{type:String, required:true},
    populacao:{type:Number, required:true},
    salarioMinimo:{type:Number, required:true}
});

module.exports = mongoose.model('Estados', estadosSchema);
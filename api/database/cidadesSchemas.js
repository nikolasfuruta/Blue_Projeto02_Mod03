const mongoose = require('mongoose');

const cidadesSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    quantidadeDeBairros:{type:Number, required:true},
    populacao:{type:String, required:true},
    aniversarioDaCidade:{type:Date, required:true}
});
     
module.exports = mongoose.model('Cidades', cidadesSchema);
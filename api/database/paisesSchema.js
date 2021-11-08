const mongoose = require('mongoose');

const paisesSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    populacao:{type:String, required:true},
    linguaMae:{type:String, required:true},
    pib:{type:String, required:true}
});

module.exports = mongoose.model('Paises', paisesSchema);
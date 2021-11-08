const Cidades = require('../database/cidadesSchemas');
const moment = require('moment');

class CidadesModel {

    static async adicionar(info){
        const newDate = moment(info.aniversarioDaCidade, "DD/MM/YYYY").format("YYYY-MM-DD")
        const newInfo = {...info, newDate}
        return await Cidades.create(newInfo)
    }

    static async listar(){
        return await Cidades.find({})
    }

    static async buscaPorNome(nome){
        const result = await Cidades.findOne({nome:nome})
        if(result===null){
            return {message:"NOME NÃO ENCONTRADO"}
        } else{
            return result
        }
    }
    
    static async deletar(nome){
        const result = await Cidades.findOneAndDelete({nome:nome})
        if(result===null){
            return {message:"NOME NÃO ENCONTRADO"}
        } else{
            return result
        }
    }

    static async alterar(nome, info){
        const result = await Cidades.findOneAndUpdate({nome:nome}, info)
        if(result===null){
            return {message:"NOME NÃO ENCONTRADO"}
        } else{
            return result
        }
    }
}

module.exports = CidadesModel;
const CidadesModel = require('../models/CidadesModel');
const Validate = require('../validations/Validate');
const moment = require('moment');

class CidadesController {

    static async adicionar(req,res){
        if(Validate.validarCidades(req.body)){
            try{
               req.body.aniversarioDaCidade = moment(req.body.aniversarioDaCidade, "DD/MM/YYYY").format("YYYY-MM-DD")
                await CidadesModel.adicionar(req.body);
                return res.status(201).json({message:"ADICIONADO"});
            } catch(err){
                console.error(err.message);
                return res.status(400).json({message:"ERRO AO ADICIONAR"})
            }
        } else {
            return res.status(400).json({message:"INFORMAÇÃO DE CADASTRO INCORRETA"});
        }
    }
        
    static async listar(req,res){
        try{
            const result = await CidadesModel.listar();
            return res.status(200).json(result);
        } catch(err){
            console.error(err.message);
            return res.status(400).json({message:"ERRO AO LISTAR"});
        }
    }

    static async buscaPorNome(req,res){
        if(Validate.validarNome(req.params.nome)){
            try{
                const result = await CidadesModel.buscaPorNome(req.params.nome);
                return res.status(200).json(result);
            } catch(err){
                console.error(err.message);
                return res.status(400).json({message:"ERRO NA BUSCA"});
            }
        } else {
            return res.status(400).json({message:"PARÂMETRO NOME INCORRETO"});
        }
        
    }

    static async deletar(req,res){
        if(Validate.validarNome(req.params.nome)){
            try{
                const result = await CidadesModel.deletar(req.params.nome)
                return res.status(200).json(result)
            } catch(err){
                console.error(err.message)
                return res.status(400).json({message:"ERRO AO DELETAR"})
            }
        } else {
            return res.status(400).json({message:"PARÂMETRO NOME INCORRETO"});
        }
        
    }

    static async alterar(req,res){
        if(Validate.validarNome(req.params.nome)||Validate.validarCidades(req.body)){
            try{
                const result = await CidadesModel.alterar(req.params.nome,req.body)
                return res.status(200).json(result)
            } catch(err){
                console.error(err.message)
                return res.status(400).json({message:"ERRO AO ALTERAR"})
            }
        } else {
            return res.status(400).json({message:"INFORMAÇÃO DE ACESSO INCORRETO"});
        }   
    }
}

module.exports = CidadesController;
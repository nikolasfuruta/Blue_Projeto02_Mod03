const PaisesModel = require('../models/PaisesModel');
const Validate = require('../validations/Validate');

class PaisesController {

    static async adicionar(req,res){
        if(Validate.validarPaises(req.body)){
            try{
                const result = await PaisesModel.adicionar(info);
                return res.status(201).json({"ADICIONADO": result});
            } catch(err){
                console.error(err.message);
                res.status(400).json("ERRO AO ADICIONAR");
            }
        } else {
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA");
        }
    }

    static async listar(req,res){
        try{
            const result = await PaisesModel.listar();
            return res.status(200).json(result);
        } catch(err){
            console.error(err.message);
            res.status(400).json({message:"ERRO AO OBTER A LISTA"});
        }
    }

    static async buscaPorNome(req,res){
        if(Validate.validarNome(req.params.nome)){
            try{
                const result = await PaisesModel.buscaPorNome(req.params.nome);
                return res.status(200).json(result);
            } catch(err){
                console.error(err.message);
                res.status(400).json({message:"ERRO NA BUSCA"});
            }
        } else {
            return res.status(400).json({message:"PARÂMETRO NOME INCORRETO"});
        }
    }

    static async deletar(req,res){
        if(Validate.validarNome(req.params.nome)){
            try{
                const result = await PaisesModel.deletar(req.params.nome);
                return res.status(200).json(result);
            } catch(err){
                console.error(err.message);
                res.status(400).json({message:"ERRO AO DELETAR"});
            }
        } else {
            return res.status(400).json({message:"PARÂMETRO NOME INCORRETO"});
        }
    }

    static async alterar(req,res){
        if(Validate.validarNome(req.params.nome)||Validate.validarPaises(req.body)){
            try{
                const result = await PaisesModel.alterar(req.params.nome, info);
                return res.status(200).json(result);
            } catch(err){
                console.error(err.message);
                res.status(400).json({message:"ERRO AO ALTERAR"});
            }
        } else {
            return res.status(400).json({message:"INFORMAÇÃO DE ACESSO INCORRETO"});
        }
    }
}

module.exports = PaisesController
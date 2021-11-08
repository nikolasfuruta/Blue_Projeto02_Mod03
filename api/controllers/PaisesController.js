const PaisesModel = require('../models/PaisesModel');

class PaisesController {

    static async adicionar(req,res){
        const info = req.body;
        if(!info||!info.nome||!info.populacao||!info.linguaMae||!info.pib){
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA")
        }
        try{
            const result = await PaisesModel.adicionar(info)
            return res.status(201).json({"ADICIONADO": result})
        } catch(err){
            console.error(err.message);
            res.status(400).json("ERRO AO ADICIONAR")
        }
    }

    static async listar(req,res){
        try{
            const result = await PaisesModel.listar()
            return res.status(200).json({"LISTA": result})
        } catch(err){
            console.error(err.message);
            res.status(400).json("ERRO AO OBTER A LISTA")
        }
    }

    static async buscaPorNome(req,res){
        const nome = req.params.nome
        try{
            const result = await PaisesModel.buscaPorNome(nome)
            return res.status(200).json({"RESULTADO": result})
        } catch(err){
            console.error(err.message);
            res.status(400).json("ERRO NA BUSCA")
        }
    }

    static async deletar(req,res){
        const nome = req.params.nome
        try{
            const result = await PaisesModel.deletar(nome)
            return res.status(200).json({"RESULTADO": result})
        } catch(err){
            console.error(err.message);
            res.status(400).json("ERRO AO DELETAR")
        }
    }

    static async alterar(req,res){
        const nome = req.params.nome;
        const info = req.body;
        
        if(!info||!info.nome||!info.populacao||!info.linguaMae||!info.pib){
            return res.status(400).json("ERRO NAS INFORMAÇÕES DE CADASTRO")
        }

        try{
            const result = await PaisesModel.alterar(nome, info)
            return res.status(200).json({"RESULTADO": result})
        } catch(err){
            console.error(err.message);
            res.status(400).json("ERRO AO ALTERAR")
        }
    }
}

module.exports = PaisesController
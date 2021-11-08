const EstadosModel = require('../models/EstadosModel');

class EstadosController {

    static async adicionar(req,res){
        const info = req.body;
        if(!info||!info.nome||!info.regiao||!info.populacao||!info.salarioMinimo){
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA")
        }
        try{
            const result = await EstadosModel.adicionar(info)
            return res.status(201).json({"ADICIONADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO ADICIONAR")
        }
    }

    static async listar(req,res){
        try{
            const result = await EstadosModel.listar()
            return res.status(200).json({"LISTA":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO LISTAR")
        }
    }

    static async buscaPorNome(req,res){
        const nome = req.params.nome
        try{
            const result = await EstadosModel.buscaPorNome(nome)
            return res.status(200).json({"RESULTADO DA BUSCA":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO NA BUSCA")
        }
    }

    static async deletar(req,res){
        const nome = req.params.nome
        try{
            const result = await EstadosModel.deletar(nome)
            return res.status(200).json({"OBJETO DELETADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO DELETAR")
        }
    }

    static async alterar(req,res){
        const nome = req.params.nome
        const info = req.body;
        if(!info||!info.nome||!info.regiao||!info.populacao||!info.salarioMinimo){
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA")
        }
        try{
            const result = await EstadosModel.alterar(nome,info)
            return res.status(200).json({"OBJETO ALTERADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO ALTERAR")
        }
    }
}

module.exports = EstadosController;
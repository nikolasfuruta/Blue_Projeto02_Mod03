const CidadesModel = require('../models/CidadesModel');

class CidadesController {

    static async adicionar(req,res){
        const info = req.body;
        if(!info||!info.nome||!info.quantidadeDeBairros||!info.populacao||!info.aniversarioDaCidade){
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA")
        }
        try{
            const result = await CidadesModel.adicionar(info)
            return res.status(201).json({"ADICIONADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO ADICIONAR")
        }
    }

    static async listar(req,res){
        try{
            const result = await CidadesModel.listar()
            return res.status(200).json({"LISTA":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO LISTAR")
        }
    }

    static async buscaPorNome(req,res){
        const nome = req.params.nome
        try{
            const result = await CidadesModel.buscaPorNome(nome)
            return res.status(200).json({"RESULTADO DA BUSCA":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO NA BUSCA")
        }
    }

    static async deletar(req,res){
        const nome = req.params.nome
        try{
            const result = await CidadesModel.deletar(nome)
            return res.status(200).json({"OBJETO DELETADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO DELETAR")
        }
    }

    static async alterar(req,res){
        const nome = req.params.nome
        const info = req.body;
        if(!info||!info.nome||!info.quantidadeDeBairros||!info.populacao||!info.aniversarioDaCidade){
            return res.status(400).json("INFORMAÇÃO DE CADASTRO INCORRETA")
        }
        try{
            const result = await CidadesModel.alterar(nome,info)
            return res.status(200).json({"OBJETO ALTERADO":result})
        } catch(err){
            console.error(err.message)
            return res.status(400).json("ERRO AO ALTERAR")
        }
    }
}

module.exports = CidadesController;
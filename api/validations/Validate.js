class Validate {

    static validarNome(nome){
        if(/\d/.test(nome)||/\W/.test(nome)){
            return false
        }
        return true
    }

    static validarPaises(info){
        if(!info||!info.nome||!info.populacao||!info.linguaMae||!info.pib){
            return false
        }
        return true
    }

    static validarEstados(info){
        if(!info||!info.nome||!info.regiao||!info.populacao||!info.salarioMinimo){
            return false
        }
        return true
    }

    static validarCidades(info){
        if(!info||!info.nome||!/\d/.test(info.quantidadeDeBairros)||!info.populacao||!info.aniversarioDaCidade){
            return false
        }
        return true
    }
}

module.exports = Validate;
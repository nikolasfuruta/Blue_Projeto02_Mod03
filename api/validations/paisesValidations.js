

exports.validarInfo = (info) => {
    if(!info||!info.nome||!info.populacao||!info.linguaMae||!info.pib){
        return false
    }
    return true
}

exports.validarNome = (nome) => {
    if(/\d/.test(nome)||/\W/.test(nome)){
        return false
    }
    return true
}


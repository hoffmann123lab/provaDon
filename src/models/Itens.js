const mongoose = require('mongoose');

const Itens = mongoose.model('Itens', {
    nameItens: String,
    descricao: String,
    numItens: Number,
    condicao: Boolean
    
});

module.exports = Itens;
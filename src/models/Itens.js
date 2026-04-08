const mongoose = require('mongoose');

const Person = mongoose.model('Itens', {
    nameItens: String,
    descricao: String,
    numItens: Number,
    condicao: Boolean
    
});

module.exports = Itens;
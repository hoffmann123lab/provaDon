const express = require('express');
const personRoutes = require('../src/routes/person');
const itensRoutes = require('../src/routes/itens');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', personRoutes);
    app.use('/oiboanoite', itensRoutes);
};
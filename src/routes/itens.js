const express = require('express');
const router = express.Router();
const ItensController = require('../controllers/ItensControllers');

router
    .post('/itens', ItensController.create)
    .get('/itens', ItensController.getAll)
    .get('/itens/:id', ItensController.getById)
    .put('/itens/:id', ItensController.update)
    .delete('/itens/:id', ItensController.delete)

module.exports = router;
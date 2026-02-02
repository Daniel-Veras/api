const express = require('express');
const router = express.Router();
const DataController = require('../controllers/DataController');

// GET todos os dados
router.get('/', DataController.getAll);

// GET um dado por ID
router.get('/:id', DataController.getById);

// POST criar novo dado
router.post('/', DataController.create);

// PUT atualizar dado
router.put('/:id', DataController.update);

// DELETE remover dado
router.delete('/:id', DataController.delete);

module.exports = router;

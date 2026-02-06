const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const DataController = require('../controllers/DataController');

// GET todos os dados (sem autenticação)
router.get('/', DataController.getAll);

// GET um dado por ID (sem autenticação)
router.get('/:id', DataController.getById);

// POST criar novo dado (requer autenticação)
router.post('/', authMiddleware, DataController.create);

// PUT atualizar dado (requer autenticação)
router.put('/:id', authMiddleware, DataController.update);

// DELETE remover dado (requer autenticação)
router.delete('/:id', authMiddleware, DataController.delete);

module.exports = router;

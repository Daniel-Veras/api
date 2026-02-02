const express = require('express');
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Info da API
router.get('/info', (req, res) => {
  res.json({
    nome: 'API Node.js',
    versao: '1.0.0',
    descricao: 'API simples com Express.js',
    endpoints: {
      dados: '/api/dados',
      health: '/api/health'
    }
  });
});

module.exports = router;

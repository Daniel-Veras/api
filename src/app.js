const express = require('express');
require('./database/connection'); // Importar para testar conexão
const { errorHandler, corsMiddleware } = require('./middleware/errorHandler');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middlewares globais
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Rotas
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dados', dataRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    mensagem: 'Bem-vindo à API!',
    documentacao: '/api/info',
    health: '/api/health'
  });
});

// 404 - Rota não encontrada
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada'
  });
});

// Middleware de erro global (deve ser o último)
app.use(errorHandler);

module.exports = app;

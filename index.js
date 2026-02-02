const express = require('express');
const { errorHandler, corsMiddleware } = require('./src/middleware/errorHandler');
const apiRoutes = require('./src/routes/apiRoutes');
const dataRoutes = require('./src/routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 Documentação: http://localhost:${PORT}/api/info`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;

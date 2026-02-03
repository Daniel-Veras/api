const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 Documentação: http://localhost:${PORT}/api/info`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});

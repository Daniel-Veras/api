const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Endpoint GET
app.get('/api/dados', (req, res) => {
  res.json({
    mensagem: 'Bem-vindo à API!',
    timestamp: new Date().toISOString(),
    dados: {
      exemplo: 'Isso é um exemplo de resposta'
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Teste a API em http://localhost:${PORT}/api/dados`);
});

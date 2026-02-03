// Middleware de autenticação JWT
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Pegar token do header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token não fornecido'
      });
    }

    // Extrair token do formato "Bearer token"
    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Formato de token inválido. Use: Bearer <token>'
      });
    }

    const token = parts[1];

    // Verificar token
    jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).json({
          sucesso: false,
          mensagem: 'Token inválido ou expirado',
          error: err.message
        });
      }

      // Adicionar dados do token ao request
      req.user = decoded;
      next();
    });
  } catch (err) {
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro na autenticação',
      error: err.message
    });
  }
};

module.exports = authMiddleware;

const AuthService = require('../services/auth/AuthService');

class AuthController {
  // Login (gera token)
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'Email e senha são obrigatórios'
        });
      }

      // Aqui você faria a verificação no banco de dados
      // Por enquanto, vou simular um usuário
      if (email === 'admin@example.com' && password === 'admin123') {
        const token = AuthService.generateToken(1, email);

        return res.json({
          sucesso: true,
          mensagem: 'Login realizado com sucesso',
          token,
          user: { id: 1, email }
        });
      }

      return res.status(401).json({
        sucesso: false,
        mensagem: 'Email ou senha incorretos'
      });
    } catch (err) {
      next(err);
    }
  }

  // Verificar token
  static verify(req, res, next) {
    try {
      res.json({
        sucesso: true,
        mensagem: 'Token válido',
        user: req.user
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthController;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class AuthService {
  // Gerar token JWT
  static generateToken(userId, email) {
    const token = jwt.sign(
      { userId, email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );
    return token;
  }

  // Verificar token
  static verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
      return { valid: true, data: decoded };
    } catch (err) {
      return { valid: false, error: err.message };
    }
  }

  // Hash de senha
  static async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      throw new Error(`Erro ao fazer hash da senha: ${err.message}`);
    }
  }

  // Comparar senha
  static async comparePassword(password, hashedPassword) {
    try {
      const match = await bcrypt.compare(password, hashedPassword);
      return match;
    } catch (err) {
      throw new Error(`Erro ao comparar senha: ${err.message}`);
    }
  }
}

module.exports = AuthService;

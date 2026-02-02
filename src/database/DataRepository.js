const pool = require('../database/connection');

class DataRepository {
  // Buscar todos os dados
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM dados ORDER BY id ASC');
      return result.rows;
    } catch (err) {
      throw new Error(`Erro ao buscar dados: ${err.message}`);
    }
  }

  // Buscar por ID
  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM dados WHERE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Erro ao buscar dado: ${err.message}`);
    }
  }

  // Criar novo
  static async create(nome, descricao) {
    try {
      const result = await pool.query(
        'INSERT INTO dados (nome, descricao) VALUES ($1, $2) RETURNING *',
        [nome, descricao]
      );
      return result.rows[0];
    } catch (err) {
      throw new Error(`Erro ao criar dado: ${err.message}`);
    }
  }

  // Atualizar
  static async update(id, nome, descricao) {
    try {
      const result = await pool.query(
        'UPDATE dados SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *',
        [nome, descricao, id]
      );
      return result.rows[0];
    } catch (err) {
      throw new Error(`Erro ao atualizar dado: ${err.message}`);
    }
  }

  // Deletar
  static async delete(id) {
    try {
      const result = await pool.query(
        'DELETE FROM dados WHERE id = $1 RETURNING *',
        [id]
      );
      return result.rows[0];
    } catch (err) {
      throw new Error(`Erro ao deletar dado: ${err.message}`);
    }
  }
}

module.exports = DataRepository;

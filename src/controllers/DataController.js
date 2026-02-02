const DataModel = require('../models/DataModel');

class DataController {
  // GET todos os dados
  static getAll(req, res, next) {
    try {
      const dados = DataModel.getAll();
      res.json({
        sucesso: true,
        data: dados
      });
    } catch (err) {
      next(err);
    }
  }

  // GET um dado por ID
  static getById(req, res, next) {
    try {
      const { id } = req.params;
      const dado = DataModel.getById(id);

      if (!dado) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Item não encontrado'
        });
      }

      res.json({
        sucesso: true,
        data: dado
      });
    } catch (err) {
      next(err);
    }
  }

  // POST criar novo dado
  static create(req, res, next) {
    try {
      const { nome, descricao } = req.body;

      if (!nome) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'Nome é obrigatório'
        });
      }

      const novoItem = DataModel.create(nome, descricao || '');
      res.status(201).json({
        sucesso: true,
        data: novoItem,
        mensagem: 'Item criado com sucesso'
      });
    } catch (err) {
      next(err);
    }
  }

  // PUT atualizar dado
  static update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;

      if (!nome) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'Nome é obrigatório'
        });
      }

      const itemAtualizado = DataModel.update(id, nome, descricao || '');

      if (!itemAtualizado) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Item não encontrado'
        });
      }

      res.json({
        sucesso: true,
        data: itemAtualizado,
        mensagem: 'Item atualizado com sucesso'
      });
    } catch (err) {
      next(err);
    }
  }

  // DELETE remover dado
  static delete(req, res, next) {
    try {
      const { id } = req.params;
      const itemRemovido = DataModel.delete(id);

      if (!itemRemovido) {
        return res.status(404).json({
          sucesso: false,
          mensagem: 'Item não encontrado'
        });
      }

      res.json({
        sucesso: true,
        data: itemRemovido,
        mensagem: 'Item removido com sucesso'
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = DataController;

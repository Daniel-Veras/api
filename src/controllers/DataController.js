const GetAllDataUseCase = require('../usecases/GetAllDataUseCase');
const GetDataByIdUseCase = require('../usecases/GetDataByIdUseCase');
const CreateDataUseCase = require('../usecases/CreateDataUseCase');
const UpdateDataUseCase = require('../usecases/UpdateDataUseCase');
const DeleteDataUseCase = require('../usecases/DeleteDataUseCase');

class DataController {
  // GET todos os dados
  static getAll(req, res, next) {
    try {
      const resultado = GetAllDataUseCase.execute();
      res.json(resultado);
    } catch (err) {
      next(err);
    }
  }

  // GET um dado por ID
  static getById(req, res, next) {
    try {
      const { id } = req.params;
      const resultado = GetDataByIdUseCase.execute(id);
      res.json(resultado);
    } catch (err) {
      if (err.status === 404) {
        return res.status(404).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      next(err);
    }
  }

  // POST criar novo dado
  static create(req, res, next) {
    try {
      const { nome, descricao } = req.body;
      const resultado = CreateDataUseCase.execute(nome, descricao);
      res.status(201).json(resultado);
    } catch (err) {
      if (err.status === 400) {
        return res.status(400).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      next(err);
    }
  }

  // PUT atualizar dado
  static update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const resultado = UpdateDataUseCase.execute(id, nome, descricao);
      res.json(resultado);
    } catch (err) {
      if (err.status === 400) {
        return res.status(400).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      if (err.status === 404) {
        return res.status(404).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      next(err);
    }
  }

  // DELETE remover dado
  static delete(req, res, next) {
    try {
      const { id } = req.params;
      const resultado = DeleteDataUseCase.execute(id);
      res.json(resultado);
    } catch (err) {
      if (err.status === 400) {
        return res.status(400).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      if (err.status === 404) {
        return res.status(404).json({
          sucesso: false,
          mensagem: err.message
        });
      }
      next(err);
    }
  }
}

module.exports = DataController;

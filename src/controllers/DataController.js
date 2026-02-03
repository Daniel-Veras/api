const GetAllDataUseCase = require('../usecases/GetAllDataUseCase');
const GetDataByIdUseCase = require('../usecases/GetDataByIdUseCase');
const CreateDataUseCase = require('../usecases/CreateDataUseCase');
const UpdateDataUseCase = require('../usecases/UpdateDataUseCase');
const DeleteDataUseCase = require('../usecases/DeleteDataUseCase');

class DataController {
  // GET todos os dados
  static async getAll(req, res, next) {
    try {
      const resultado = await GetAllDataUseCase.execute();
      res.json(resultado);
    } catch (err) {
      next(err);
    }
  }

  // GET um dado por ID
  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      const resultado = await GetDataByIdUseCase.execute(id);
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
  static async create(req, res, next) {
    try {
      const { nome, descricao } = req.body;
      const resultado = await CreateDataUseCase.execute(nome, descricao);
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
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const resultado = await UpdateDataUseCase.execute(id, nome, descricao);
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
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const resultado = await DeleteDataUseCase.execute(id);
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

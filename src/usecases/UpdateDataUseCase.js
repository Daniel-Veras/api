const DataModel = require('../models/DataModel');

class UpdateDataUseCase {
  execute(id, nome, descricao) {
    try {
      if (!id) {
        throw {
          status: 400,
          message: 'ID é obrigatório'
        };
      }

      if (!nome) {
        throw {
          status: 400,
          message: 'Nome é obrigatório'
        };
      }

      const itemAtualizado = DataModel.update(id, nome, descricao || '');

      if (!itemAtualizado) {
        throw {
          status: 404,
          message: 'Item não encontrado'
        };
      }

      return {
        sucesso: true,
        data: itemAtualizado,
        mensagem: 'Item atualizado com sucesso'
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new UpdateDataUseCase();

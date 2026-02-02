const DataModel = require('../models/DataModel');

class DeleteDataUseCase {
  execute(id) {
    try {
      if (!id) {
        throw {
          status: 400,
          message: 'ID é obrigatório'
        };
      }

      const itemRemovido = DataModel.delete(id);

      if (!itemRemovido) {
        throw {
          status: 404,
          message: 'Item não encontrado'
        };
      }

      return {
        sucesso: true,
        data: itemRemovido,
        mensagem: 'Item removido com sucesso'
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new DeleteDataUseCase();

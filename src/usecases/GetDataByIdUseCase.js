const DataModel = require('../models/DataModel');

class GetDataByIdUseCase {
  execute(id) {
    try {
      if (!id) {
        throw new Error('ID é obrigatório');
      }

      const dado = DataModel.getById(id);

      if (!dado) {
        throw {
          status: 404,
          message: 'Item não encontrado'
        };
      }

      return {
        sucesso: true,
        data: dado
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new GetDataByIdUseCase();

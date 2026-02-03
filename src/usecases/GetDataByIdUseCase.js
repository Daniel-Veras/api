const DataService = require('../services/database/DataService');

class GetDataByIdUseCase {
  async execute(id) {
    try {
      if (!id) {
        throw new Error('ID é obrigatório');
      }

      const dado = await DataService.getById(id);

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

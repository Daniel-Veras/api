const DataService = require('../services/database/DataService');

class GetAllDataUseCase {
  async execute() {
    try {
      const dados = await DataService.getAll();
      return {
        sucesso: true,
        data: dados
      };
    } catch (err) {
      throw new Error(`Erro ao buscar dados: ${err.message}`);
    }
  }
}

module.exports = new GetAllDataUseCase();

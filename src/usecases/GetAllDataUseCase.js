const DataModel = require('../models/DataModel');

class GetAllDataUseCase {
  execute() {
    try {
      const dados = DataModel.getAll();
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

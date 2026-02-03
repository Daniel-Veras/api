const DataService = require('../services/database/DataService');

class CreateDataUseCase {
  async execute(nome, descricao) {
    try {
      if (!nome) {
        throw {
          status: 400,
          message: 'Nome é obrigatório'
        };
      }

      const novoItem = await DataService.create(nome, descricao || '');
      
      return {
        sucesso: true,
        data: novoItem,
        mensagem: 'Item criado com sucesso'
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new CreateDataUseCase();

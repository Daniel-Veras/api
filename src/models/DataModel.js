// Dados simulados (banco de dados em memória)
let dados = [
  { id: 1, nome: 'Item 1', descricao: 'Descrição do item 1' },
  { id: 2, nome: 'Item 2', descricao: 'Descrição do item 2' }
];

// Simular auto-incremento de ID
let nextId = 3;

class DataModel {
  static getAll() {
    return dados;
  }

  static getById(id) {
    return dados.find(item => item.id === parseInt(id));
  }

  static create(nome, descricao) {
    const novoItem = {
      id: nextId++,
      nome,
      descricao
    };
    dados.push(novoItem);
    return novoItem;
  }

  static update(id, nome, descricao) {
    const item = this.getById(id);
    if (!item) return null;
    item.nome = nome;
    item.descricao = descricao;
    return item;
  }

  static delete(id) {
    const index = dados.findIndex(item => item.id === parseInt(id));
    if (index === -1) return null;
    return dados.splice(index, 1)[0];
  }
}

module.exports = DataModel;

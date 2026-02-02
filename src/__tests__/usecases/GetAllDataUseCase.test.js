const GetAllDataUseCase = require('../../usecases/GetAllDataUseCase');
const DataModel = require('../../models/DataModel');

// Mock do DataModel
jest.mock('../../models/DataModel');

describe('GetAllDataUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve retornar sucesso com todos os dados', () => {
    // Arrange
    const dadosMock = [
      { id: 1, nome: 'Item 1', descricao: 'Descrição 1' },
      { id: 2, nome: 'Item 2', descricao: 'Descrição 2' }
    ];
    DataModel.getAll.mockReturnValue(dadosMock);

    // Act
    const resultado = GetAllDataUseCase.execute();

    // Assert
    expect(resultado).toEqual({
      sucesso: true,
      data: dadosMock
    });
    expect(DataModel.getAll).toHaveBeenCalled();
    expect(resultado.data).toHaveLength(2);
  });

  test('deve retornar array vazio quando não houver dados', () => {
    // Arrange
    DataModel.getAll.mockReturnValue([]);

    // Act
    const resultado = GetAllDataUseCase.execute();

    // Assert
    expect(resultado.sucesso).toBe(true);
    expect(resultado.data).toEqual([]);
    expect(resultado.data).toHaveLength(0);
  });

  test('deve lançar erro quando DataModel falhar', () => {
    // Arrange
    DataModel.getAll.mockImplementation(() => {
      throw new Error('Erro na base de dados');
    });

    // Act & Assert
    expect(() => {
      GetAllDataUseCase.execute();
    }).toThrow('Erro ao buscar dados: Erro na base de dados');
  });

  test('deve chamar DataModel.getAll uma única vez', () => {
    // Arrange
    DataModel.getAll.mockReturnValue([]);

    // Act
    GetAllDataUseCase.execute();

    // Assert
    expect(DataModel.getAll).toHaveBeenCalledTimes(1);
  });
});

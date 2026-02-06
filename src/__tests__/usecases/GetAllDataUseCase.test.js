// Mock da conexão antes de importar qualquer coisa que use banco
jest.mock('../../database/connection');

const GetAllDataUseCase = require('../../usecases/GetAllDataUseCase');
const DataService = require('../../services/database/DataService');

// Mock do DataService
jest.mock('../../services/database/DataService');

describe('GetAllDataUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    // Limpar conexões abertas
    jest.resetModules();
  });

  test('deve retornar sucesso com todos os dados', async () => {
    // Arrange
    const dadosMock = [
      { id: 1, nome: 'Item 1', descricao: 'Descrição 1' },
      { id: 2, nome: 'Item 2', descricao: 'Descrição 2' }
    ];
    DataService.getAll.mockResolvedValue(dadosMock);

    // Act
    const resultado = await GetAllDataUseCase.execute();

    // Assert
    expect(resultado).toEqual({
      sucesso: true,
      data: dadosMock
    });
    expect(DataService.getAll).toHaveBeenCalled();
    expect(resultado.data).toHaveLength(2);
  });

  test('deve retornar array vazio quando não houver dados', async () => {
    // Arrange
    DataService.getAll.mockResolvedValue([]);

    // Act
    const resultado = await GetAllDataUseCase.execute();

    // Assert
    expect(resultado.sucesso).toBe(true);
    expect(resultado.data).toEqual([]);
    expect(resultado.data).toHaveLength(0);
  });

  test('deve lançar erro quando DataService falhar', async () => {
    // Arrange
    DataService.getAll.mockRejectedValue(new Error('Erro na base de dados'));

    // Act & Assert
    await expect(GetAllDataUseCase.execute()).rejects.toThrow('Erro ao buscar dados: Erro na base de dados');
  });

  test('deve chamar DataService.getAll uma única vez', async () => {
    // Arrange
    DataService.getAll.mockResolvedValue([]);

    // Act
    await GetAllDataUseCase.execute();

    // Assert
    expect(DataService.getAll).toHaveBeenCalledTimes(1);
  });
});

-- Tabela de dados
CREATE TABLE IF NOT EXISTS dados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_dados_nome ON dados(nome);

-- Inserir dados de exemplo
INSERT INTO dados (nome, descricao) VALUES 
  ('Item 1', 'Descrição do item 1'),
  ('Item 2', 'Descrição do item 2')
ON CONFLICT DO NOTHING;

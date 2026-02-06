

-- Criar usuário daniel (se não existir)
DO
$$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_roles WHERE rolname = 'daniel'
   ) THEN
      CREATE ROLE daniel LOGIN PASSWORD '0099abc';
   END IF;
END
$$;

-- Dar permissões ao usuário daniel
GRANT USAGE ON SCHEMA public TO daniel;
GRANT CREATE ON SCHEMA public TO daniel;

-- Permissões padrão para futuras tabelas e sequências
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO daniel;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO daniel;

-- Criar tabela de dados
CREATE TABLE IF NOT EXISTS dados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar índice
CREATE INDEX IF NOT EXISTS idx_dados_nome ON dados(nome);

-- Inserir dados de exemplo
INSERT INTO dados (nome, descricao) VALUES 
  ('Item 1', 'Descrição do item 1'),
  ('Item 2', 'Descrição do item 2')
ON CONFLICT DO NOTHING;

-- Dar permissão ao daniel nesta tabela também
GRANT ALL ON dados TO daniel;
GRANT ALL ON SEQUENCE dados_id_seq TO daniel;

\echo '✅ Setup concluído!'

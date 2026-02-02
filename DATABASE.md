## Acesso ao PostgreSQL

### Configuração

A API está configurada para conectar ao PostgreSQL com as seguintes credenciais:

- **Host:** localhost
- **Port:** 5432
- **Database:** banco
- **User:** daniel
- **Password:** 0099abc

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=banco
DB_USER=daniel
DB_PASSWORD=0099abc
```

Ou copie do `.env.example`:

```bash
cp .env.example .env
```

### Criar Tabelas

Execute o arquivo SQL para criar as tabelas:

```bash
psql -h localhost -U daniel -d banco -f src/database/migrations.sql
```

Ou execute no psql:

```sql
\c banco
\i src/database/migrations.sql
```

### Estrutura do Banco

**Tabela `dados`:**
```sql
CREATE TABLE dados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Arquivos Adicionados

- `src/config/database.js` - Configuração de conexão
- `src/database/connection.js` - Pool de conexões
- `src/database/DataRepository.js` - Acesso aos dados no banco
- `src/database/migrations.sql` - Script de criação de tabelas
- `.env.example` - Exemplo de variáveis de ambiente

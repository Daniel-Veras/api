# API Node.js com Express.js

API RESTful com estrutura MVC, usando Express.js, CORS e tratamento de erros global.

## 📁 Estrutura do Projeto

```
src/
├── controllers/     # Lógica de negócio
├── models/         # Modelos de dados
├── routes/         # Definição de rotas
├── middleware/     # Middlewares (CORS, tratamento de erros)
└── utils/          # Utilitários
index.js           # Arquivo principal
```

## 📦 Instalação

```bash
npm install
```

## 🚀 Execução

```bash
# Modo produção
npm start

# Modo desenvolvimento (com reload automático)
npm run dev
```

## 🔌 Endpoints

### Info da API
- **GET** `/api/info` - Informações da API
- **GET** `/api/health` - Status da API

### Dados (CRUD)
- **GET** `/api/dados` - Listar todos os dados
- **GET** `/api/dados/:id` - Obter um dado por ID
- **POST** `/api/dados` - Criar novo dado
- **PUT** `/api/dados/:id` - Atualizar um dado
- **DELETE** `/api/dados/:id` - Remover um dado

## 📝 Exemplos de Uso

### GET - Listar todos
```bash
curl http://localhost:3000/api/dados
```

### GET - Por ID
```bash
curl http://localhost:3000/api/dados/1
```

### POST - Criar
```bash
curl -X POST http://localhost:3000/api/dados \
  -H "Content-Type: application/json" \
  -d '{"nome":"Novo Item","descricao":"Descrição"}'
```

### PUT - Atualizar
```bash
curl -X PUT http://localhost:3000/api/dados/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"Item Atualizado","descricao":"Nova descrição"}'
```

### DELETE - Remover
```bash
curl -X DELETE http://localhost:3000/api/dados/1
```

## ✨ Recursos

✅ Estrutura MVC  
✅ CRUD completo  
✅ CORS habilitado  
✅ Tratamento de erros global  
✅ Validação de dados  
✅ Logging de requisições  
✅ Health check  
✅ Resposta padronizada em JSON


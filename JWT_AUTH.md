# Autenticação JWT com Bearer Token

## Como funciona

1. Cliente faz login em `/api/auth/login` com email e senha
2. Servidor retorna um token JWT
3. Cliente envia token em todas as requisições protegidas no header: `Authorization: Bearer token`
4. Servidor valida o token e processa a requisição

## Variáveis de Ambiente

Adicione ao `.env`:

```env
JWT_SECRET=sua_chave_secreta_super_segura_aqui
JWT_EXPIRES_IN=24h
```

## Endpoints

### Login (sem autenticação)
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Resposta:**
```json
{
  "sucesso": true,
  "mensagem": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 1, "email": "admin@example.com" }
}
```

### Acessar rotas protegidas

Todas as rotas de `/api/dados/*` agora requerem autenticação.

**Exemplo:**
```bash
GET /api/dados
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Teste com cURL

### 1. Fazer login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123"
  }'
```

### 2. Usar o token para acessar dados
```bash
curl http://localhost:3000/api/dados \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

## Credenciais de Teste

- Email: `admin@example.com`
- Senha: `admin123`

## Arquivos Criados

- `src/middleware/authMiddleware.js` - Middleware para validar JWT
- `src/services/auth/AuthService.js` - Serviço de geração e validação de tokens
- `src/controllers/AuthController.js` - Controller de autenticação
- `src/routes/authRoutes.js` - Rotas de autenticação

## Rotas Protegidas

- `GET /api/dados` ✅ Requer token
- `GET /api/dados/:id` ✅ Requer token
- `POST /api/dados` ✅ Requer token
- `PUT /api/dados/:id` ✅ Requer token
- `DELETE /api/dados/:id` ✅ Requer token

## Próximos Passos

Para um projeto production, você deveria:

1. Criar tabela `users` no banco de dados
2. Implementar registro de usuários
3. Validar email e senha com o banco
4. Usar refresh tokens
5. Implementar logout/blacklist de tokens

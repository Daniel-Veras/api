# API Node.js

API simples em Node.js com Express e um único endpoint GET.

## Instalação

```bash
npm install
```

## Execução

```bash
# Modo produção
npm start

# Modo desenvolvimento (com reload automático)
npm run dev
```

## Endpoints

### GET /api/dados

Retorna dados em JSON.

**Resposta:**
```json
{
  "mensagem": "Bem-vindo à API!",
  "timestamp": "2026-02-02T10:30:00.000Z",
  "dados": {
    "exemplo": "Isso é um exemplo de resposta"
  }
}
```

**Teste:**
```bash
curl http://localhost:3000/api/dados
```

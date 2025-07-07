# API User

API REST simples utilizando Express, TypeScript e SQLite.

## Pré-requisitos

- Node.js 18+ e npm (para rodar localmente)
- Docker e Docker Compose (para rodar via containers)

## Como executar com Docker

1. **Clone o repositório e navegue até a pasta:**
   ```bash
   cd api-user
   ```

2. **Execute o projeto com Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Para executar em segundo plano:**
   ```bash
   docker-compose up --build -d
   ```

4. **Para parar os containers:**
   ```bash
   docker-compose down
   ```

5. **Para ver os logs:**
   ```bash
   docker-compose logs -f backend
   ```

## Como executar em modo desenvolvimento local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. (Opcional) Crie um arquivo `.env` para variáveis de ambiente, se necessário.

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor será iniciado com `nodemon` e recarregará automaticamente ao salvar alterações nos arquivos TypeScript.

## Endpoints da API

A API estará disponível em `http://localhost:3001`

- `GET /` - Hello World
- `GET /api/users` - Listar todos os usuários
- `POST /api/users` - Criar um novo usuário

### Exemplo de uso

**Criar usuário:**
```bash
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@email.com"}'
```

**Listar usuários:**
```bash
curl http://localhost:3001/api/users
```

## Estrutura do Projeto

```
api-user/
├── docker-compose.yml
└── backend/
    ├── Dockerfile
    ├── .dockerignore
    ├── package.json
    ├── tsconfig.json
    ├── app.ts
    ├── db.ts
    └── src/
        ├── controllers/
        ├── models/
        └── routes/
```

## Banco de Dados

O SQLite está configurado para persistir os dados em um volume Docker, garantindo que os dados não sejam perdidos quando o container for reiniciado.

---

Sinta-se à vontade para contribuir ou abrir issues!
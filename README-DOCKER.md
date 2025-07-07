# API User - Docker Setup

Este projeto contém uma API REST em TypeScript com Node.js, Express e SQLite.

## Pré-requisitos

- Docker
- Docker Compose

## Como executar

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

## Endpoints da API

A API estará disponível em `http://localhost:3001`

- `GET /` - Hello World
- `GET /api/users` - Listar todos os usuários
- `POST /api/users` - Criar um novo usuário

### Exemplo de uso:

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

## Desenvolvimento

O projeto está configurado com hot reload. Qualquer alteração no código será automaticamente refletida no container.

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

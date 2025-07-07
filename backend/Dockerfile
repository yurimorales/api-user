FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Instala as dependências de desenvolvimento
RUN npm install -g typescript ts-node nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]

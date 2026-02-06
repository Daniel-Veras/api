# Usar imagem oficial do Node
FROM node:18

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta usada pela API
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]

# Estágio de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o resto dos arquivos
COPY . .

# Build da aplicação
RUN npm run build

# Estágio de produção
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copiar apenas os arquivos necessários do estágio de build
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expor a porta que a aplicação usará
EXPOSE 3000

# Definir variável de ambiente para a porta
ENV PORT=3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"] 
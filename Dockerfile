FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "npx next start -H 0.0.0.0 -p ${PORT}"]

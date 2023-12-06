FROM node:lts AS builder

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS app

COPY --from=builder /app/dist/game7-app/ /usr/share/nginx/html

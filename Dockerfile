FROM node:20-alpine3.17 as builder

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular app for production
RUN npm run build --prod


FROM caddy

COPY --from=builder /app/dist /usr/share/caddy/dist
COPY Caddyfile /etc/caddy/Caddyfile

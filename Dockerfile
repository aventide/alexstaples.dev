FROM node:lts-bookworm-slim as builder
WORKDIR /app

# copy base dependencies
COPY package.json .
COPY package-lock.json .

# install and build npm dependencies
RUN npm install
COPY . .

RUN npm run build

# serve
FROM nginx:bookworm
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
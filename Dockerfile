ARG NODE_VERSION=20-alpine
ARG APPLICATION_PORT=3000

FROM node:${NODE_VERSION} AS base

# Install PNPM using NPM
RUN npm install -g pnpm@9.9.0

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

FROM base AS build

RUN pnpm install --frozen-lockfile

COPY . .

RUN echo "Building application..." 
RUN pnpm run build

FROM nginx:alpine AS production

ARG API_URL

RUN adduser -D -g 'www' www

RUN mkdir -p /tmp/nginx && \
    chown -R www:www /tmp/nginx && \
    mkdir -p /var/cache/nginx && \
    mkdir -p /var/cache/nginx/client_temp && \
    chown -R www:www /var/cache/nginx && \
    mkdir -p /var/run/nginx && \
    chown -R www:www /var/run/nginx && \
    mkdir -p /var/log/nginx && \
    chown -R www:www /var/log/nginx

RUN rm -rf /usr/share/nginx/html/* && rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html/

ENV NODE_ENV="production"
ENV VITE_BASE_API_URL="$API_URL"

LABEL maintainer="Developer <developer@beetleltd.org>" \
      company="Beetle Ltd" \
      website="https://www.beetleltd.org"

RUN chown -R www:www /usr/share/nginx/html/* && \
    chmod -R 755 /usr/share/nginx/html/* && \
    chown -R www:www /etc/nginx && \
    chmod -R 755 /etc/nginx

USER www

EXPOSE ${APPLICATION_PORT}

CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine AS build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN ls
RUN npm config set registry https://registry.npmmirror.com && \
    npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-deps /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
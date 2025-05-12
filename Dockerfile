FROM node:24-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN if ! command -v yarn >/dev/null; then npm install -g yarn; fi && yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start"]

# Production step with Nginx
FROM nginx:1.27.5-alpinelpine3.21

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

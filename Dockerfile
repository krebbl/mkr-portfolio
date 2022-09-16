FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 8080

RUN yarn build

CMD ["yarn", "start"]

FROM node:alpine

WORKDIR /api

COPY package.json /api

RUN npm install

COPY . /api

CMD [ "npm", "start" ]
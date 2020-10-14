FROM node:alpine

WORKDIR /web

COPY package.json /web

RUN npm install

COPY . /web

CMD [ "npm", "run", "serve" ]
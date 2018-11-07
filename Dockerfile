FROM node:latest

RUN mkdir /app
WORKDIR /app

RUN npm install

EXPOSE 8080
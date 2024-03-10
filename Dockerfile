FROM node:14

WORKDIR /work

COPY package.json ./
COPY .env ./
RUN npm install

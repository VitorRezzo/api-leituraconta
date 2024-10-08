FROM node:latest
WORKDIR /api

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm", "start"]

EXPOSE 4000
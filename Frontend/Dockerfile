FROM node:10

RUN mkdir -p /usr/src/todolist/frontend

WORKDIR /usr/src/todolist/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]

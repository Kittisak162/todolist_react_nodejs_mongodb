FROM node:10

RUN mkdir -p /usr/src/todolist/backend

WORKDIR /usr/src/todolist/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm","start"]

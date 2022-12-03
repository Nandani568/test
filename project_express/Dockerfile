FROM node:16-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

#RUN npm install

RUN npm install --legacy-peer-deps


EXPOSE 3000

CMD ["npm", "run", "dev"]

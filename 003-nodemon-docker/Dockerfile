FROM node:18.13.0
EXPOSE 7000
WORKDIR /app

COPY package.json /app
COPY package-lock.json  /app
RUN npm install
COPY . /app
CMD ["npm","start"]

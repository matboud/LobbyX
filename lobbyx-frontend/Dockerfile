FROM node:21-alpine3.17


COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ]
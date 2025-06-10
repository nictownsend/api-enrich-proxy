FROM node:alpine

ENV NODE_ENV=production

WORKDIR /opt/ibm

COPY . .

RUN npm install

RUN apk add --no-cache tini

CMD ["tini", "node", "index.js"]
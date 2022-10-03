FROM node

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json /usr/src/app/

COPY . .
RUN npm install

RUN npx prisma generate

EXPOSE 5001
CMD ["npm", "run", "start:dev"]




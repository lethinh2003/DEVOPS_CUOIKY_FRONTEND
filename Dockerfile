FROM node:16.20.2-buster

WORKDIR /app

COPY package*.json ./
COPY ./.env ./.env

RUN npm install
RUN npm install pm2 -g

COPY . .

RUN npm run build:production 

EXPOSE 3001

CMD ["pm2-runtime", "start", "npm", "--name", "frontend_production",  "--", "run", "start:production"]

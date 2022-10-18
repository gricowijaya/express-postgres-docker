FROM node:16.18.0-alpine

# mv all code to here
WORKDIR /usr/src/app

# Copy the packages
COPY package*.json ./

# Install the packages
RUN npm install

COPY . .

CMD [ "node", "app.js"]

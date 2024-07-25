# specify a base image
FROM node:14-alpine

# setup working directory
WORKDIR /usr/app

# download and install a dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

# default command
CMD ["npm", "start"]
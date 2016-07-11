FROM node:5

#install all globally
RUN npm install -g rimraf webpack webpack-dev-server typescript typings wintersmith@2
RUN npm run typings -- install
RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm"]

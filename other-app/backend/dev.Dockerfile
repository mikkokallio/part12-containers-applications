FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV DEBUG=todo-app:*
USER node
CMD ["npm", "start"]

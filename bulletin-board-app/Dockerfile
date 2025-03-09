FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]

HEAD
COPY . .
>>>>>>> b989556 (App v1 - memory storage)

b989556 (App v1 - memory storage)


HEALTHCHECK --interval=5s CMD curl --fail http://localhost:8080 || exit 1  
5aef87d (V5 demo)

FROM node:18-alpine
RUN mkdir -p /home/node/app/backend/node_modules && chown -R node:node /home/node/app/backend
RUN mkdir -p /home/node/app/frontend/notion-organizador-notas/node_modules && chown -R node:node /home/node/app/frontend/notion-organizador-notas
RUN mkdir -p /home/node/app/frontend/notion-organizador-notas/dist && chown -R node:node /home/node/app/frontend/notion-organizador-notas/dist
WORKDIR /home/node/app
COPY . .
WORKDIR /home/node/app/backend
RUN npm install
COPY --chown=node:node . .
WORKDIR /home/node/app/frontend/notion-organizador-notas
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
USER node
CMD [ "node", "app.js" ]

FROM node:20-alpine 

COPY . .

RUN npm install
RUN npm run build
RUN rm -rf node_modules && npm cache clean --force



EXPOSE 3000

CMD ["npm", "start"]
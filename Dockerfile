FROM node:19
WORKDIR /src
COPY . .
RUN npm install
EXPOSE $5000
CMD ["npm", "start"]
FROM node:19
WORKDIR /usr/src/song_app
COPY . .
RUN npm install
EXPOSE $5000
CMD ["npm", "start"]
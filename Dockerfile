FROM node:apline
WORKDIR .
RUN  npm install
EXPOSE 3000
CMD ["npm" , "start"]
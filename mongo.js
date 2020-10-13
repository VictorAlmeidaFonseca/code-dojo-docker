const mongoose = require('mongoose');

const url = "localhost:4000"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });



const db =  mongoose.connection;

module.exports = db



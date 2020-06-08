const express = require("express");
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

const MongoClient = require("mongoose");

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log('rodando na porta 3001');
  MongoClient.connect("mongodb://admin:admin@datacenter-shard-00-00-0v6wh.mongodb.net:27017,datacenter-shard-00-01-0v6wh.mongodb.net:27017,datacenter-shard-00-02-0v6wh.mongodb.net:27017/test?ssl=true&replicaSet=DataCenter-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () =>{
    console.log('conectado');
  } 
  )
});

requireDir('./src/models');

app.use('/apinode', require('./src/routes'));


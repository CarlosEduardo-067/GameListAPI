const express = require('express')
const app = express()
const port = 3000

const connection = require ('../Configs/conectionBD.js');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

connection.connect();


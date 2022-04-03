const express = require('express');

const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const data = require('./data.json');

app.use(bodyParser.json());
app.use(express.static('./build'));
app.get('/', (req, res) => {
  res.sendFile('./build/index.html');
});

app.post('/', (req, res) => {
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.status(200).send();
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(process.env.PORT || 8080);

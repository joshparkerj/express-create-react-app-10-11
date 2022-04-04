const fs = require('fs');
const express = require('express');
const escape = require('escape-html');
const rateLimit = require('express-rate-limit');

const bodyParser = require('body-parser');
const data = require('./data.json');

const app = express();

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
}));

app.use(bodyParser.json());
app.use(express.static('./build'));
app.get('/', (_, res) => {
  res.sendFile('./build/index.html');
});

app.post('/', (req, res) => {
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.status(200).send();
});

app.get('/data', (_, res) => {
  res.send(escape(data));
});

app.listen(process.env.PORT || 8080);

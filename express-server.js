/* eslint-disable no-console */
const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cors = require('cors');
const escapeHtml = require('escape-html');

const { read, write } = require('./read-write');

const data = [];
const dataFields = new Set(['price', 'size', 'brand', 'color']);

const expressServer = async function expressServer() {
  try {
    const fileContent = await read('./data.json');
    data.push(...JSON.parse(fileContent));
  } catch (e) {
    console.error(e);
  }

  const app = express();

  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
  }));

  app.use(cors());

  app.use(bodyParser.json());

  app.use(express.static('./build'));
  app.use(express.static('./dist'));
  app.use(express.static('./public'));

  app.post('/', async ({ body }, res) => {
    console.log(body);
    const keys = Object.keys(body).filter((key) => dataFields.has(key));
    if (keys.length > 0) {
      const sanitizedBody = keys.reduce((acc, e) => ({ ...acc, [e]: escapeHtml(body[e]) }), {});
      data.push({ ...sanitizedBody, id: data.length });
      try {
        await write('./data.json', JSON.stringify(data));
        res.status(200).send();
      } catch (e) {
        console.error(e);
        res.status(500).send('dying over here');
      }
    } else {
      res.status(200).send();
    }
  });

  app.get('/data', (_, res) => {
    res.send(JSON.stringify(data.filter((e) => e)));
  });

  const port = process.env.PORT || 8080;
  return app.listen(port, () => console.log(`now started listening on port: ${port}`));
};

module.exports = expressServer;

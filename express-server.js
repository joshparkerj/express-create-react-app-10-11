/* eslint-disable no-console */
const { readFile, writeFile } = require('fs');
const express = require('express');
const rateLimit = require('express-rate-limit');

const bodyParser = require('body-parser');
const cors = require('cors');

const data = [];

const read = (fileName) => (new Promise((resolve, reject) => {
  readFile(fileName, (err, contents) => {
    if (err) {
      reject(err);
    } else {
      resolve(contents);
    }
  });
}));

const write = (fileName, contents) => (new Promise((resolve, reject) => {
  writeFile(fileName, contents, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
}));

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
    if (Object.keys(body).length > 0) {
      data.push({ ...body, id: data.length });
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

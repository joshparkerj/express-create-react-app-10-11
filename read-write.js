const { readFile, writeFile } = require('fs');

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

module.exports = { read, write };

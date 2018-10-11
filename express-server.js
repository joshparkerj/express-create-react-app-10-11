const express = require('express');
const app = express();
//const port = process.env.PORT || 80;
const data = require('./data.json');
const fs = require('fs');
const bodyParser = require('body-parser');

function writeFile(){
  fs.writeFile('./data.json',JSON.stringify(data), err => {
    if(err){
      console.error(err);
      return err;
    }
  });
}
app.use(bodyParser.json());
app.use(express.static('./build'));
app.get('/',(req,res) => {
  res.sendFile('./build/index.html');
})
app.post('/',(req,res) => {
  console.log(req.body);
  data.push(req.body);
  writeFile();
  res.status(200).send();
})

app.get('/data', (req,res) => {
  res.send(data);
})

app.listen(process.env.PORT || 8080);

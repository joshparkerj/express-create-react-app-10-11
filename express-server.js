const express = require('express');
const app = express();

app.use(express.static('./build'));
app.get('/',(req,res) => {
  res.sendFile('./build/index.html');
})

app.listen(4000,() => {
  console.log('now listening on port 4000')
})
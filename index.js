
require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req, res, next)=>{

  const clientInfo= {
    ipaddress:req.ip,
    language:req.header('accept-language')?req.header('accept-language'):'no',
    software:req.header('user-agent')
  }
  res.json(clientInfo);
})


app.listen (3000, ()=> {
  console.log('Your app is listening on port ' + 3000);
});

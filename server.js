const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  console.log(response);
  response.send('<h1>Wazzzzzzzzzup?</h1>');
});

app.use(function(request, response) {
  response.status(404);
  response.send('<h1>Custom 404: File Not Found</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`);  
})


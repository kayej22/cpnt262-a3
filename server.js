const path = require('path');
const express = require('express');
const app = express();

/* Static asset from public directory */
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  console.log(response);
  response.send('<h1>Wazzzzzzzzzup?</h1>');
});
/* Custom 404 page */
app.use(function(request, response) {
  response.status(400);
  response.render('404.jade', {title: '404 File not Found'});
});
/* Default Port */
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`);  
})


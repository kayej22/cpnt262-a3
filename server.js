const http = require ('http');
const dayjs = require('dayjs');



const now =dayjs();
console.log(dayjs);
console.log(now);

const server = http.createServer(function(request,response) {
  console.log(request.url);

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.end("<h1>Waaaaaaazzzzzzzup!!</h1>");
});

server.listen(8080, function(){
  console.log('listening on port 8080.')
})
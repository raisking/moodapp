const http = require('http');
const textapp = require('./serverside/moodapp');


const server = http.createServer(textapp);
server.listen(process.env.PORT||8000);
console.log('Server is Ruuning on Port 8000');
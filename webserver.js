const http = require('http');
const moodapp = require('./serverside/moodapp');


const server = http.createServer(moodapp);
server.listen(process.env.PORT||8000);
console.log('MoodApp Server is Running on Port 8000');
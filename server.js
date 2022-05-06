const http = require('http');

let server = http.createServer(handle);

function handle(req, res) {
    res.write('Hi there client! ');
    res.write('I was delivered to you from a server');
    res.write(' via a URL!');
    res.end();
}

server.listen(3000);
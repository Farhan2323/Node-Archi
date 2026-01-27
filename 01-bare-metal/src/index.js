const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    
    if (req.url ==='/users') {
        res.end('Users endpoint\n');
        return;
    }else if (req.url === '/') {
        res.end('Welcome to home page\n');
        return;
        
    }else {
        res.statusCode = 404;
        res.end('Not Found\n');
        return;
    }


});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
const http = require('http');
const bodyParser = require('./utils/bodyParser');

const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);
    
    if (req.url ==='/users') {
        if (req.method === 'GET') {
            res.end('GET Users\n');
            return;
        }else if (req.method === 'POST') {
            try {
                const data = await bodyParser(req);
                console.log('Parsed Data:', data);
                res.end(`User Created: ${JSON.stringify(data)}\n`);
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON\n');
            }
            return;
        }else  {
            res.statusCode = 405;
            res.end('NOT ALLOWED\n');
            return;
        }
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
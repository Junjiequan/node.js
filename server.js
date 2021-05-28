const http = require('http');  
const fs = require('fs');   //file system;

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/random':
            path += 'random.html';
            res.statusCode = 200;
            break;
        case '/skills':
            path += 'skills.html';
            res.statusCode = 200;
            break;
        default:
            console.log(req.url);
            res.setHeader('Location', '/');
            res.statusCode = 301;
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})
server.listen(PORT, ()=>{
    console.log(`Server linstening on port ${PORT}`);
});

const http = require('http');  
const fs = require('fs');   //file system;

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');

    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact.html';
            break;
        case '/random':
            path += 'random.html';
            break;
        default:
            path += 'index.html';
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.error(err);
        } else {
            res.end(data);
        }
    })
})
server.listen(PORT,HOSTNAME, ()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT} /`);
});
// const newName = "delete.txt"
// const { unlink } = require('fs');
// unlink( newName, (err)=>{
//     if(err) console.log(err);
// })

// const addNums = require('./equation');
// const sum = addNums(2,3);
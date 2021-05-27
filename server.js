const http = require('http');  
const fs = require('fs');   //file system;

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    fs.readFile('index.html',(err,data)=>{
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
const newName = "fkoff.txt"
const { unlink } = require('fs');
unlink( newName, (err)=>{
    if(err) console.log(err);
})

const addNums = require('./equation');
const sum = addNums(2,3);
console.log('this aaaaaaaaaaa',sum);  
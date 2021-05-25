// const http = require('http');

// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((request, response)=>{
//     response.statusCode = 200;
//     response.setHeader('content-type', 'text/plain');
//     response.end('hey jay');
// })

// server.listen(PORT, HOSTNAME, ()=>{
//     console.log(`server running at http://${HOSTNAME}:${PORT}/`);
// });

// console.log('file',__filename);
// console.log('dir', __dirname);

// const fs = require('fs');
// fs.readFile('hi.txt', 'utf8', (err,data)=>{
//     if(err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

// const {readFile, readFileSync} = require('fs');
// try{
//     const data = readFileSync('hi.txt', 'utf8');
//     console.log(data);
// } catch (err){
//     console.log(err);
// }

// console.log('log from outside to test asynchronos');


const {writeFile, writeFileSync} = require('fs');
const newContent = "this is a new content";
writeFile('hi.txt', newContent + " ", {flag: "a"}, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('content Written!');
})
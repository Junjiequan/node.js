# Some codes


*local server creation*
```
const http = require('http');

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.end('hey jay');
}) 
server.listen(PORT,HOSTNAME, ()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}/`)
})
```

*some methods*
```
const {readFile, readFileSync} = require('fs);
const {writeFile, writeFileSync} = require('fs);
const { appendFile } = require('fs);
```


*Some basic promsie & async code structure*
```
const fs = require('fs); //file system
const {readFile, readFileSync} = require('fs);

//regular promise way
fs.readFile('hi.txt', 'utf8', (err,data)=>{ 
    if(err){}; console.log(data)
})

//asynchronous
try{
    const data = readFileSync('hi.txt', 'utf8');
    console.log(data);
}   catch(err){
    console.log(err);
}
console.log('content ouside async here');
```
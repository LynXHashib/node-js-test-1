const fs = require('fs');
const http = require('http');
const url = require('url');
/*
const textIn = fs.readFileSync(`./starter/txt/input.txt`,`utf-8`);
console.log(textIn);
const textOut = `Avocado is an unknow entity. We only know that ${textIn} .\n Created on ${Date.now()}`
console.log(textOut);
fs.writeFileSync(`./starter/txt/input2.txt`, textOut)
*/
/*
fs.readFile('./starter/txt/start.txt' , 'utf-8', (err, data1) => {
    fs.readFile(`./starter/txt/${data1}.txt` , 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./starter/txt/append.txt` , 'utf-8', (err, data3) => {
        console.log(data3);
    fs.writeFile(`./starter/txt/final.txt` ,`${data2}\n${data3}`,`utf-8`, err=>{
        console.log('Your file has been written');
        
    })    
    })
})
})
console.log('Will read file');
*/
//////////////////////////
//FILES

//////////////////////////////
// SERVER
const data = fs.readFileSync(`./starter/dev-data/data.json`, `utf-8`);
const productData = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === `/` || pathName === `/home`) {
    res.end(`Welcome to the server`);
  } else if (pathName === `/about`) {
    res.end(`This a page about use`);
  } else if (pathName === `/terms`) {
    res.end(`This is term you agree to by using this app`);
  } else if (pathName === `/api`) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': `text/html`,
    });

    res.end(`
      <style>
      body{
      background-color: black;
      color: red;
      }
      </style>
      <h1>ERROR 404</h1>`);
  }
  console.log(req.url);
});

server.listen(8000, `127.0.0.1`, () => {
  console.log('Listening to request on port 8000');
});

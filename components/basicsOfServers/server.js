// const http=require('http')
// http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.write(`<h1>im html</h1>`)
//     res.write(`<h3>im H3</h3>`)
//     res.end('hlw it is my first server')
// }).listen(4000)


const http=require('http')
let age=21;
http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','text/html');
    resp.write(
        `<html>
        <head>
        <title>first my title</title>
        </head>
        <body>
        <h1>my name:sky</h1>
        <h4>My age:${age}</h4>
        <h2>Current Date & Time ${Date()}</h2>
        </body>
        </html>`
    )
    resp.end()

}).listen(3100)
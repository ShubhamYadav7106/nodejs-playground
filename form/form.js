const http=require('http')
const fs=require('fs')


http.createServer((req,resp)=>{
    fs.readFile('form.html','utf-8',(err,data)=>{
        if (err) {
           resp.writeHead(500,{
            'Content-Type':'text/plane',
           }) 
           resp.write('Internal server error')
           resp.end();
           return
        }
        resp.writeHead(200,{
            'Content-Type':'text/html'
        })
        resp.write(data)
        resp.end()
    })
   
}).listen(4200)
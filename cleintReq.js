// const http=require('http');
// http.createServer((req,resp)=>{
//     console.log(req.url) // 1 by 1
//     console.log(req.headers)
//     console.log(req.headers.host)
//     console.log(req.method)
// }).listen(2100)

const http=require('http')
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url=='/'){
        res.write(`<h2>Login Page</h2>`)
    }
    else if(req.url=='/sign'){ //http://localhost:42000/sign
        res.write(`<h2>sign up page</h2>`)
    } else{
        res.write(`<h2>Another app</h2>`)
    }
    res.end()
}).listen(4200)
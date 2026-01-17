const fs=require('fs')
const http=require('http')
http.createServer((req,res)=>{
if (req.url=='/') {
    fs.readFile('home.html','utf-8',(err,data)=>{
    if (err) {
        res.writeHead(500,{
            'Content-Type':'text/plain'
        })
        res.end('Internal error')
        return false
    }
    res.write(data)
    res.end()
})
}
else if(req.url=='/style.css') {
    fs.readFile('style.css','utf-8',(err,data)=>{
    if (err) {
        res.writeHead(500,{
            'Content-Type':'text/plain'
        })
        res.end('css not found')
        return false
    }
    res.writeHead(200,{'Content-Type':'text/css'})
    res.end(data)
})
}
})
.listen(4100)
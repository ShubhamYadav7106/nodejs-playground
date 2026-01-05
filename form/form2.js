const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{
        "Content-Type":"text/html"
    })
    resp.write(`
        
        <form action="/submit" method="post">
       <input type="text" placeholder="Enter fr2 name" name="name">
        <input type="number" placeholder="Enter Age" name="age">
        <input type="password" placeholder="Enter Password" name="password">
        <button type="submit">Submit</button>
        </form>
        `)
        resp.end()
}).listen(3200)




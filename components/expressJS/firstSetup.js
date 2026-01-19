const express =require('express')
const app=express()
app.get("",(req,resp)=>{
    resp.send("<h2>Hello Iam Express</h2>")
})
app.get("/about",(req,resp)=>{
    resp.send("<h2>I'm a route of express ABOUT</h2>")
})
.listen(2800)
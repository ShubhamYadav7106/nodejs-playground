// const express =require('express') vanila ecma
import express from 'express'
import about from './about.js'
import contact from './contact.js'
const app=express()
app.get("",(req,resp)=>{
    resp.send("<h2>Hello Iam Express</h2>")
})
app.get("/routes",(req,resp)=>{
    resp.send("<h2>I'm a route of express </h2>")
})
app.get('/about',(req,resp)=>{
    resp.send(about())
})
app.get("/contact",(req,resp)=>{
    resp.send(contact())
})
.listen(2800)
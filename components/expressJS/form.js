// const express =require('express') vanila ecma
import express from 'express'
import { login } from './login.js'
import about from './about.js'

const app=express()
app.get("/",(req,resp)=>{
    resp.send(about())
})
app.get('/login',(req,resp)=>{
    resp.send(login())
})
app.post('/submit',(req,resp)=>{
    resp.send(`<h3>Data Submited</h3>
        <a href='/'>Go to about</a>
        `)
})

.listen(3800)
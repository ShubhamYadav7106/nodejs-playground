const http = require('http')
const userForm = require('./userForm')
const submit = require('./submit')
http.createServer((req, resp) => {
    if (req.url == '/') {

        userForm(req, resp)
    } else if (req.url == '/submit') {

        submit(req, resp)
    }
    resp.end()
}).listen(3100)
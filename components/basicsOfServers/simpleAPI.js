const http=require("http")
const userData=[
    {
        name:'symlink',
        age:19,
        gmail:'sy@gmail.com'

    },
    {
        name:'novu',
        age:29,
        gmail:'ny@gmail.com'

    },
    {
        name:'jake',
        age:23,
        gmail:'jk@gmail.com'

    },
]
http.createServer((req,reps)=>{
    reps.setHeader("Content-Type","application/json")
    reps.write(JSON.stringify(userData))
    reps.end()

}).listen(2400)
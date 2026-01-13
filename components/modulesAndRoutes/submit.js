const qs = require('querystring')
const submit = (req, resp) => {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    })

    let dataBody=[]
    req.on('data',(chunk)=>{
        dataBody.push(chunk)
    })
    req.on('end',()=>{
        let rawData=Buffer.concat(dataBody).toString()
        let readData=qs.parse(rawData)
        let DataString='My name: '+readData.name+'my age: '+readData.age+'my password: '+readData.password
        console.log(DataString)
    })

    resp.write(`
        <h3>Data Submitted Sucessfully !</h3>
        `)
}
module.exports = submit;
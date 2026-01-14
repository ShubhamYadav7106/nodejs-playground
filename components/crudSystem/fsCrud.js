const fs=require('fs')
const operation=process.argv[2]

if (operation=='write') {
    const name=process.argv[3]
    const content=process.argv[4]
    const fullName=name+'.txt'
    fs.writeFileSync(fullName,content)
}
else if (operation=='read') {
    const name=process.argv[3]
    const fullName=name+'.txt'
    let data=fs.readFileSync(fullName,'utf-8')
    console.log(data)
}
else if (operation=='update') {
    const name=process.argv[3]
    const content=process.argv[4]
    const fullName=name+'.txt'
    let data=fs.appendFileSync(fullName,content)
    console.log(data)

}else if(operation=='delete'){
const name=process.argv[3]
const fullName=name+'.txt'
fs.unlinkSync(fullName)
}else{
    console.log('no operations found')
}

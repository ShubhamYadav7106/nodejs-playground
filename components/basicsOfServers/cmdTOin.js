            //Dynamic port by cmd inputs
const http=require('http')
const arg=process.argv
const port=arg[2];
http.createServer((req,resp)=>{
resp.write('Dynamicly Port')
resp.end()
}).listen(port)


// [
//   'C:\\Program Files\\nodejs\\node.exe', // index 0
//   'C:\\path\\to\\server.js',             // index 1
//   '3000' <-- its input from cmd          // index 2
// ]

// argv[0]	Node ka path
// argv[1]	Tumhari file ka path
// argv[2]	Tumhara input (port)
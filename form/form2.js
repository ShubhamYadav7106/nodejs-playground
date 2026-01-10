// const http = require('http');

// http.createServer((req,resp) => {

//     resp.writeHead(200, {
//         "Content-Type": "text/html"
//     });

//     // Home page
//     if (req.url === '/') {
//         resp.write(`
//             <form action="/submit" method="post">
//                 <input type="text" placeholder="Enter fr2 name" name="name"><br><br>
//                 <input type="number" placeholder="Enter Age" name="age"><br><br>
//                 <input type="password" placeholder="Enter Password" name="password"><br><br>
//                 <button type="submit">Submit</button>
//             </form>
//         `);
//     }

//     // Submit page
//     else if (req.url === '/submit') {
//         resp.write('<h2>Form Submitted Successfully</h2>');
//     }



//     resp.end();

// }).listen(3200);


const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    if (req.url === '/' ) {
        fs.readFile('form2.html', 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end('Internal error');
                return;
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(data);
        });
    }

    else if (req.url === '/submit') {
        let userData = [];

        req.on('data', chunk => {
            userData.push(chunk);
        });

        req.on('end', () => {
            let rawData = Buffer.concat(userData).toString();
            let readableData = querystring.parse(rawData);

            fs.writeFile(
                readableData.name + '.txt',
                JSON.stringify(readableData, null, 2),
                'utf-8',
                (err) => {
                    if (err) {
                        resp.end('Internal server error');
                        return;
                    }

                    resp.end('Form submitted & file created');
                }
            );
        });
    }

}).listen(3500);


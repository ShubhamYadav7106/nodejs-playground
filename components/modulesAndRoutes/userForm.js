const userForm = (req, resp) => {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    })
    resp.write(`
    <form action="/submit" method="post">
        <input type="text" placeholder="Enter name" name="name"/>
        <input type="number" placeholder="Enter Age" name="age"/>
        <input type="password" placeholder="Enter Password" name="password"/>
        <button type="submit">Submit2</button>
    </form>
    `)
}
module.exports = userForm
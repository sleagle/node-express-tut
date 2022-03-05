const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.end('Welcome to the home page')
    }
    if(req.url === '/about') {
        res.end('here is a short history')
    }
    res.end(`<h1>Oops!</h1><p>We cant seem to fiind the page you are looking for</p> <a href='/'>back home</a>`)
})

server.listen(5000)
// Arquivo que será executado em um cpc em um servidor no final
const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.write('<html>')
        res.write('<head><tittle>Enter Message</tittle></head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Enter</button></form><body>')
        res.write('</html>')
        return res.end()
    }
    console.log(req.url, req.method ,req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello! I create my first server with node.js!</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)
const http = require('node:http')

const PORT = 3000
const server = http.createServer((request, response) => {
    if(request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Server</title>
                </head>
                <body>
                    <h1>Welcome to My HTTP Server</h1>
                    <p>Functional</p>
                </body>
                </html>
            `)
    }
})

server.listen(PORT, () => {
    console.log("start")
})
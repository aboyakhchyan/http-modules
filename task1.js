const http = require('node:http')

const PORT = 3000
const server = http.createServer((request, response) =>{

    if(request.method === 'GET') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: 'Welcome to the backend server'}))
    }else if(request.method === 'POST') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `You sent a ${request.method} requiest`}))
    }else if(request.method === 'PUT') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `You sent a ${request.method} requiest`}))
    }else if(request.method === 'PATCH') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `You sent a ${request.method} requiest`}))
    }else if(request.method === 'DELETE') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `You sent a ${request.method} requiest`}))
    }else if(request.method === 'OPTIONS') {
        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: `You sent a ${request.method} requiest`}))
    }else {
        response.writeHead(405, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: 'Method Not Allowed'}))
    }
})

server.listen(PORT, () => {
    console.log('start')
})
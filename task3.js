const fs = require('node:fs')
const path = require('node:path')
const http = require('node:http')

const PORT = 3000

const server = http.createServer((request, response) => {
    const endpoint = path.basename(request.url)

    if(request.method === 'GET' && endpoint === 'users') {
        let file = ''
        try {
            file = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
        }catch (err) {
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(JSON.stringify([]))
        }

        response.end(JSON.stringify(file))
    }else if(request.method === 'POST' && endpoint === 'users') {
            response.writeHead(200, {"Content-Type": "application/json"})

            let result = ''
            request.on('data', chunk => result += chunk)

            request.on('end', () => {

                try {
                    const file = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
                    const newFile = file
                    newFile.users.push(JSON.parse(result))

                    fs.writeFileSync('users.json', JSON.stringify(newFile))

                    response.end(JSON.stringify({message: JSON.parse(result)}))
                }catch (err) {
                    response.writeHead(400, {"Content-Type": 'application/json'})
                    response.end(JSON.stringify({message: 'client error'}))
                }
            })
        
    }

})

server.listen(PORT, () => {
    console.log('server is runing')
})
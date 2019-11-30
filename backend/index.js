const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const port = process.argv[2] || 3031

http.createServer(function (request, response) {
    if(request.method === 'GET') {
        handleGet(request, response)
    } else if(request.method === 'POST') {
        handlePost(request, response)
    } else {
        response.writeHead(501, { 'Content-Type': 'text/plain' })
        response.write('Unknown method\n')
        response.end()
    }
}).listen(parseInt(port, 10))

function handleGet(request, response) {
    const uri = url.parse(request.url).pathname
    let filename = path.join(process.cwd(), 'static', uri)

    const contentTypesByExtension = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript'
    }

    fs.exists(filename, function (exists) {
        if (!exists) {
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.write('404 Not Found\n')
            response.end()
            return
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html'

        fs.readFile(filename, 'binary', function (err, file) {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' })
                response.write(err + '\n')
                response.end()
                return
            }

            const headers = {}
            const contentType = contentTypesByExtension[path.extname(filename)]
            if (contentType) {
                headers['Content-Type'] = contentType
            }
            response.writeHead(200, headers)
            response.write(file, 'binary')
            response.end()
        })
    })
}



function handlePost(request, response) {
    var body = ''

    request.on('data', function (data) {
        body += data

        if (body.length > 1e6)
            request.connection.destroy()
    });

    request.on('end', function () {
        console.log( body )

        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('[ 12, 13, 14 ]')
        response.end()
    })
}

console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown')
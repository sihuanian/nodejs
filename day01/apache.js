const http = require('http')
const fs = require('fs')

const rootPath = 'E:/webStromProject/nodjs/day01/resource'
const server = http.createServer()
server.on('request', function (request, response) {
    const url = request.url
    let filePath = '/index.html'

    if (url !== '/') {
        filePath = url
    }

    fs.readFile(rootPath +　filePath, function (error, data) {
        if (error) {
            return 'Not find 404'
        } else {
            response.end(data)
        }
    })
})

server.listen(3000, function () {
    console.log('服务器已经启动。')
})

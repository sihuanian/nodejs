// 引入http核心模块
const http = require('http')
const fs = require('fs')
// 创建server
const server = http.createServer()
// 监听request请求事件，设置请求处理函数
server.on('request', function (req, res) {
    // console.log('服务器接到了请求。')
    // 发送响应数据
    const url = req.url
    // 设置响应头，防止乱码
    if (url == '/') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('这是根路径。')
    } else if (url === '/home') {
        fs.readFile('./resource/index.html', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                console.log('读取文件失败。')
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                console.log('读取文件成功。')
                res.end(data)
            }
        })
    } else if (url === '/image') {
        fs.readFile('./resource/a.jpeg', function (error, data) {
            if (error) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                console.log('读取文件失败。')
            } else {
                res.setHeader('Content-Type', 'image/jpeg')
                console.log('读取文件成功。')
                res.end(data)
            }
        })
    } else if (url === '/person') {
        const person = [
            {name: '陈', age: 18},
            {name: '刘', age: 20},
            {name: '杨', age: 21}
        ]
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end(JSON.stringify(person))
    } else {
        res.end('404')
    }
})
// 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('服务器启动成功。')
})

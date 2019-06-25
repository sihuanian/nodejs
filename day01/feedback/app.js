const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
]

http.createServer(function (req, res) {
    const commentObj = url.parse(req.url, true)
    console.log(commentObj)
    const pathname = commentObj.pathname

    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('Not Found 404')
            }
            const html = template.render(data.toString(), {comments: comments})
            res.end(html)
        })
    } else if (pathname.indexOf('/public/') === 0) {
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return res.end('Not Found 404')
            }
            res.end(data)
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    } else if (pathname === '/pinglun') {
        // const comment = res.end(JSON.stringify(pathname.query))
        const comment = commentObj.query
        comments.unshift(comment)
        res.statusCode = 302


       // 重定向
        res.setHeader('Location', '/')



        res.end()
    }else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('Not Found 404')
            }
            res.end(data)
        })
    }
}).listen(3000, function () {
    console.log('runing...')
})

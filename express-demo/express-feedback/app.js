const express = require('express')

// 处理post请求，获得传入的参数列表
const bodyParser = require('body-parser')

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
// 相当于http.createServer()
var app = express()
// 配置使用express--art-template
app.engine('html', require('express-art-template'))
// 公开/public/文件夹，使用户可以通过输入url访问/public/文件夹下的文件
app.use('/public/', express.static('public'))

// 配置bodyParser,使request多了个body属性，request.body为post请求的传入的参数对象
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 当用户发出get请求'/'时，执行回调函数
app.get('/', function (req, res) {
    // 使用模版对象渲染index.html,默认使用项目路径下的views文件夹
    // 如果想要修改默认的 views 目录，则可以
    // app.set('views', render函数的默认路径)
    res.render('index.html', {
        comments: comments
    })
})

app.get('/post', function (req, res) {
    res.render('post.html')
})

/*
app.get('/pinglun', function (req, res) {
  var comment = req.query
  comment.dateTime = new Date().toLocaleDateString()
  comments.unshift(comment)
  res.redirect('/')
  // res.statusCode = 302
  // res.setHeader('Location', '/')
})
*/

app.post('/post', function (req, res) {
    const comment = req.body
    // console.log(req.body)
    comment.dataTime = new Date().toLocaleDateString()
    comments.unshift(comment)
    // 重定向到'/'，相当于之前的res.statusCode = 302;res.setHeader('Location', 'url')
    res.redirect('/')
})

// 相当于之前的http.listen(port, function(){})
app.listen(3000, function () {
    console.log('runing...')
})

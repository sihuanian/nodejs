const http = require('http')
const fs = require('fs')
const template = require('art-template')

const server = http.createServer()

const rootPath = 'F:/study'

server.on('request', function (req, res) {
    const url = req.url

    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            return '404 Not Found'
        }

        fs.readdir(rootPath, function (err, files) {
            if (err) {
                return `Can't find dir`
            }
           /* let content = ''
            files.forEach(function (item) {
                content += `
                  <tr>
                    <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1509589967">2018-10-30</td>
                  </tr>
                  `
            })
            data = data.toString().replace('^_^', content)
            data = data.toString().replace('###', rootPath)*/

           const htmlStr = template.render(data.toString(), {
               title: 'nodejs 中使用art-template',
               files: files
           })

            res.end(htmlStr)
        })
    })
})

server.listen(3000, function () {
    console.log('runing...')
})

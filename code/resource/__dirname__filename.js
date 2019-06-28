const fs = require('fs')
const path = require('path')

// 文件操作中尽量
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', function (err, data) {
    if (err) {
        console.log('读取文件失败。')
    } else {
        console.log(data)
    }
})
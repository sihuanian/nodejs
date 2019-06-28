const fs = require('fs')

fs.readFile('./data/a.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('读取a.txt文件失败。')
    } else {
        console.log(data)
        fs.readFile('./data/b.txt', 'utf8', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                fs.readFile('data/c.txt', 'utf8', function (err, data) {
                    if (err) {
                        console.log('读取文件失败。')
                    } else {
                        console.log(data)
                    }
                })
            }
        })
    }
})
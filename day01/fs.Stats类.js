const fs = require('fs')

const filePath = 'F:/study/nodejs资料（7天）/02/README.md'
fs.stat(filePath, function(err, states) {
    console.log(states)
    console.log(filePath + '创建时间是： ' + states.mtime.toLocaleString())
})

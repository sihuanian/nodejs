;
require('./c')
const name = 'rose'

function hello() {
    console.log('hello, nodejs')
}
hello()
exports.name = name
exports.add = function add (a, b) {
    console.log('向外暴露的函数')
    return a + b
}

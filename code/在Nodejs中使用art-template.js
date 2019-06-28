const fs = require('fs')
const template = require('art-template')

fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        return 'Not Found 404'
    }
    // parame1: string ,需要渲染的模版
    // parame2: object ，渲染所需的数据
    // return: string , 渲染之后的结果
    const tem = template.render(data.toString(), {
        name: 'jack',
        age: 20,
        province: '江西省',
        hobbies: ['coding', 'game', 'eating'],
        title: 'art-template'
    })
    console.log(tem)
})


const fs = require('fs')

const path = './db.json'

exports.find = function (callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data))
    })
}

/*
1. 读取db.json
2. 将json字符串转换成对象
3. 为student添加id属性并将student添加到students中
4. 写入文件
    - 将students对象转成字符串
    - 通过fs.writeFile将更新的students写入path文件中

 */
exports.save = function (student, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        const studnetUpdata = JSON.stringify({students: students})

        fs.writeFile(path, studnetUpdata, function (err) {
            if (err) {
                return callback(err)
            } else {
                callback(null)
            }

        })
    })

}

/*
    1. 读取db.json,将其转为对象，
    2. 找到指定ID的学生对象，
    3. 修改该学生对象的属性，
    4. 将学生对象数组转成字符串，
    5. 保存到db.json文件中
 */
exports.findById = function (id, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        const student = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, student)
    })
}

/*
    1. 读取db.json,将其转为对象，
    2. 找到指定ID的学生对象，
    3. 修改该学生对象的属性，
    4. 将学生对象数组转成字符串，
    5. 保存到db.json文件中
 */
exports.updateById = function (student, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students
        student.id = parseInt(student.id)
        var stu = students.find(item => {
                return item.id === student.id
            }
        )
        for (var key in student) {
            stu[key] = student[key]
        }
        const newStudents = JSON.stringify({students:students})
        fs.writeFile(path, newStudents, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })

    })
}


/*
    1. 读取db.json,将其转为对象，
    2. 找到指定ID的学生对象，
    3. 删除该学生对象，
    4. 将学生对象数组转成字符串，
    5. 保存到db.json文件中
 */
exports.delete = function (id, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        const students = JSON.parse(data).students
        const index = students.findIndex( item => {
            return item.id === id
        })
        students.splice(index, 1)
        const newStudets = JSON.stringify({students: students})
        fs.writeFile(path, newStudets, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

const express = require('express')
const router = express.Router()
const Student = require('./students')

router.get('/students', function (req, res) {

    // 第二个参数传'utf8'，data就已经是字符串了
    /* fs.readFile('db.json', 'utf8', function (err, data) {
         if (err) {
             return res.status(500).send('server error')
         }

         res.render('index.html', {
             fruit: JSON.parse(data).fruit,
             students: JSON.parse(data).students
         })
     })*/

    Student.find(function (err, data) {
        if (err) {
            return res.status(500).send('Sever error.')
        }
        console.log(data)
        res.render('index.html', {
            students: data,
            fruits: [
                '苹果',
                '香蕉',
                '橘子',
                '菠萝'
            ]
        })
    })
})

router.get('/students/add', function (req, res) {
    res.render('add.html')
})
router.post('/students/add', function (req, res) {
    new Student(req.body).save(function (err, result) {
        if (err) {
            console.log(err)
            return res.status(500).send('server error.')
        }
        console.log(result)
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    Student.findByIdAndDelete((req.query.id), function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(req.query.id, function (err, student) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.render('update.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    Student.findByIdAndUpdate(req.body.id, req.body, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

module.exports = router

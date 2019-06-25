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

        res.render('index.html', {
            students: data.students,
            fruit: data.fruit
        })
    })
})

router.get('/students/add', function (req, res) {
    res.render('add.html')
})
router.post('/students/add', function (req, res) {
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function (req, res) {
    Student.delete(parseInt(req.query.id), function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.render('update.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('server error.')
        }
        res.redirect('/students')
    })
})


module.exports = router

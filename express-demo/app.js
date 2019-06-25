const express = require('express')

const app = express()

app.use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
    res.send('你好，Express.')
})
app.get('/home', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Express start</title>
    </head>
    <body>
    <h2>Hello,Express!</h2>
    </body>
    
    
    <script>
    
    </script>
    </html>
    `)
})

app.get('/about', function (req, res) {
    console.log(req.query)
    res.send(req.query)
})

app.listen(3000, function () {
    console.log('runing port in 3000')
})

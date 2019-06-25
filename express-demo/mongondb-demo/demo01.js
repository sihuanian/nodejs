const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

/*
const admin = new User({username: 'rose',password: '222222',email: 'rose@admin.com'})

// 保存数据
admin.save(function (err, result) {
    if (err) {
        console.log('存储失败。')
    } else {
        console.log('存储成功。')
        console.log(result)
    }

})
*/

/*

// 查询全部数据
User.find(function (err, result) {
    if (err) {
        console.log('查询失败。')
    } else {
        console.log(result)
    }

})

// 条件查询
User.find({username: 'jack'}, function (err, result) {
    if (err) {
        console.log('查询失败。')
    } else {
        console.log('查询成功。')
        console.log(result)
    }
})


User.where('username').equals('rose').exec(function (err, result) {
    if (err) {
        console.log('查询失败。')
    } else {
        console.log('查询成功。')
        console.log(result)
    }
})
*/

/*
// 更新数据
User.updateOne({username: 'jack'},{username: 'tom'}, function (err, result) {
    if (err) {
        console.log('更新失败。')
    } else {
        console.log('更新成功。')
        console.log(result)
    }
})
*/

/*
User.remove({username: 'tom'}, function (err, res) {
    if (err) {
        console.log('查询失败。')
    } else {
        console.log('查询成功。')
        console.log(res)
    }
})
*/

User.find(function (err, res) {
    if (err) {
        console.log('查询失败。')
    } else {
        console.log('查询成功。')
        console.log(res)
    }
})

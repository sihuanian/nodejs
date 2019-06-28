var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'student'
});

connection.connect();

const que = 'select * from t_user'
const add = 'insert into t_user value(null, "tom", "tom", "江西")'
const del = 'delete from t_user where username="rose"'
const update = 'update t_user set username="jerry",password="jerry" where username="tom"'

connection.query(que, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end();
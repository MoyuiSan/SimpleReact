// 数据库连接配置
const mysql = require("mysql");
const pool = mysql.createPool({
    host: '47.106.208.186',
    user: 'root',
    password: 'Root!!2018',
    database: 'test',
    port: '3306'

});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;
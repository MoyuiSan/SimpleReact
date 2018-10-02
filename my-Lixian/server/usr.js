const express = require('express');
const router = express.Router();

const db = require("./config/mydb");

router.get("/sear", function (req, res, next) {
    db.query("select * from user", function (err, rows) {
        if (err) {
            res.send({ title: "用户列表", datas: [] });
        } else {
            res.send({ title: "用户列表", datas: rows });
        }
    });
});
//用户登录
router.get("/login", function (req, res, next) {
    const username = req.query.username;
    const password = req.query.password;
    let sql = "select * from user where username='" + username + "'and password='" + password + "'";
    let isUser;
    db.query(sql, function (err, rows) {
        if (err) {
            res.send("登录失败！");
        } else {
            isUser = rows[0];
            if (typeof isUser == 'object') {
                req.session.user = username;
                res.send(req.session.user);
            } else {
                res.send("登录失败！");
            }


        }
    });
});
//邮箱查询
router.get("/email", function (req, res, next) {
    const email = req.query.email;
    let sql = "select * from user where email='" + email + "'";
    db.query(sql, function (err, rows) {
        if (err) {
            res.send("bad");
        } else {
            // res.send(typeof rows[0]);
            if (typeof rows[0] == "undefined") {
                res.send("1");
            } else {
                res.send("0");
            }
        }
    });
});
//用户添加
router.get("/add", function (req, res, next) {
    const username = req.query.username;
    const password = req.query.password;
    const email = req.query.email;
    let sql = "insert into user (id,username,password,email) values (0,'" + username + "','" + password + "','" + email + "')";
    let sql1 = "select * from user where username='" + username + "'";
    let isUser;
    db.query(sql1, function (err, rows) {
        if (err) {
            res.send(sql1);
        } else {
            isUser = rows[0];
            console.log(typeof isUser);
            if (typeof isUser == 'undefined') {
                db.query(sql, function (err, rows) {
                    if (err) {
                        res.send(sql);
                    } else {
                        res.send("恭喜小主注册成功了！");
                    }
                });
            } else {
                res.send("抱歉该账户已被注册了！");
            }
        }
    });
});
module.exports = router;
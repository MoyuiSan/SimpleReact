const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();


router.get("/email", function (req, res, next) {
    const mail = req.query.eil;
    const code = req.query.code;

    //邮件发送
    const transporter = nodemailer.createTransport({
        service: 'QQ',
        port: 465, // SMTP 端口
        secureConnection: true,
        auth: {
            user: '1193292553@qq.com',//你的163邮箱账号
            pass: 'rpgaefgzsncshjcj'//你的163邮箱密码
        }
    });
    const mailOptions = {
        from: '1193292553@qq.com', // sender address
        to: mail, // list of receivers
        subject: '验证码', // Subject line
        text: '测试网站发送', // plaintext body
        html: "<h2>验证码:" + code + "</h2>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (!error) {
            return res.send("邮件发送成功，请注意查收！");
        } else {
            console.log(error);
            return res.send("邮件发送失败，请稍后重试！");
        }
    });
});
module.exports = router;
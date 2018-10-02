const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session');
const user=require("./usr")
const email=require("./email")
var cookieParser = require('cookie-parser')//设置加密cookie
// const request = require('request')
// const cheerio = require('cheerio')
// app.use(express.static(path.resolve(__dirname, "dist")));
//跨域设置
app.all("*", function (req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header("Access-Control-Allow-Credentials", true);
    // 这里获取 origin 请求头 而不是用 *
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
});
app.use(cookieParser('xxx')); 
app.use(session({
  secret: 'xxx',//与cookieParser中的一致
  resave: true,
  saveUninitialized:true
 }));

app.get('/index', function (req, res) {
  console.log(req.signedCookies); 
  res.send(req.signedCookies.userinfo);
});
//加载子程序
var admin = express();

admin.on('mount', function (parent) {
  console.log('Admin Mounted');
  // console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
  res.send('Admin Homepage------');
})

app.use('/admin', admin);
app.delete('/aa', function (req, res) {
  res.send('DELETE request to homepage');
});
app.get("/userInfo",function(req,res){
   res.send(req.session.user);
});

app.get("/userExit",function(req,res){
  req.session.destroy();
  res.send("z再见了主子");
});
app.get("/set",function(req,res){
  //设置cookie
  res.cookie('userinfo','123',{maxAge:600000,signed:true});  //signed 表示对cookie加密
  res.send("设置cookie成功");
});
app.use("/mysql",user);
app.use("/email",email);
var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口
 
//启动监听
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
 
//module.exports = app;//这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来

// app.get('/', function (req, res) {
//   request('https://y.qq.com/', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var $ = cheerio.load(body);
//       var nacText = $(".playlist__item_box").html();
//       res.send(nacText);
//     }
//   })
// });
// app.listen(3001, function () {
//   console.log('OK--------');
// });
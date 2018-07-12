var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var httpRouter = require('./routes/http');
var angularRoutesMusicRouter = require('./routes/angularRoutesMusic');
var yds = require('./routes/yds');

//设置跨域访问 
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//路由
app.use('/', indexRouter);
app.use('/http', httpRouter); //http请求示例
app.use('/angular-routes-music', angularRoutesMusicRouter); //angular学习：路由music
app.use('/yds', yds); //angular学习：路由music

app.listen(3000);
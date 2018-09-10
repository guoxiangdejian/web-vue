const koa = require('koa')
const koaRoute = require('koa-route')
const cors = require('koa2-cors')
const koabody = require('koa-body')
const app = new koa()
app.use(koabody())
//跨域请求
app.use(cors({
    origin: "*",
    exposeHeaders: ['WWW-Authenticate',
        'Server-Authorization',
        'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE',
        'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization',
        'Accept', 'X-Custom-Header', 'anonymous'],
}));

app.use(koaRoute.post('/reg',require('./route/reg')))
app.use(koaRoute.post('/goodsdata',require('./route/goodsdata')))
app.use(koaRoute.post('/login',require('./route/login')))
app.use(koaRoute.post('/address',require('./route/addressdata')))
app.use(koaRoute.post('/newaddress',require('./route/newaddress')))
app.use(koaRoute.post('/order',require('./route/orderdata')))
app.use(koaRoute.post('/orderlist',require('./route/getlist')))
app.use(koaRoute.post('/deleteolder',require('./route/deleteolder')))

app.listen(3030)
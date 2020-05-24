const express = require('express');
const app = express();

const port = 5000;

var mylog = (req,res,next)=>{
    console.log("this is middle ware");
    next()
}

app.use(mylog)

var serverTime = (req,res,next)=>{
    req.requestTime = Date.now();
    next()
}
app.use(serverTime)

app.get('/',(req,res)=>{
    res.send('your server time is ' + req.requestTime)
})
app.listen(port,()=>{
    console.log('your server is running');
    
})
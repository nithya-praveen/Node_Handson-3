const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log('This is First Middleware');
    next();
}
const middleware2 = (req,res,next)=>{
    console.log('This is Second Middleware');
    next();
}
app.use(middleware1);
app.use(middleware2);

app.get('/',(req, res) => {
  console.log('Time:')
  res.send('User is sending something in home page');
  res.end();
})
app.get('/user', middleware1,(req, res) => {
    console.log('Request Type:');
    res.send('user is sending something to middleware1');
    res.end();
  })
  app.get('/user1', middleware2,(req, res) => {
    console.log('Request Type:');
    res.send('user is sending something to middleware2');
    res.end();
  })
app.listen(8001,()=>{
    console.log('Application is running on port 8001');
})
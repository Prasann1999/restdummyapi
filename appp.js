var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send('Hello express');
})
app.get('/api/courses',(req,res)=>{
        //in real world here we get resposes from database
        res.send([1,2,3]);
    
})
app.listen(3045,()=> console.log('listening on port 3045...'))
const express = require('express');
const app = express();


app.get('/', function(req, res){
        res.send("This is a app1 for demo");
});

app.listen(8080,function(){
        console.log('app is running in port 8080');
})


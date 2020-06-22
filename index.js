var Express = require('express'); 
var app = Express(); 
app.get('/',function(req,res){ 
    res.send('Hello World (from Docker!) IBM Demo'); 
});
app.listen(8080);

var express=require('express');
var http=require('http');
var app=express();

app.use(express.bodyParser());

app.all('/',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID");
  	res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  	// intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

app.get('/',function(req,res,next){
	console.log('HTTP Get comming');
	var msg={msg:'Hello Express.js GET'};
	res.setHeader('Content-Type', 'application/json');
	console.log(req.query);
	res.end(JSON.stringify(msg));
});
app.post('/',function(req,res,next){
	console.log('HTTP Post comming');
	console.log('request : '+JSON.stringify(req.body));
	var request_data=req.body;
	request_data.msg='Hello From Express.js post';
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(request_data));
});
http.createServer(app).listen(8888);
console.log('Listening on port 8888');
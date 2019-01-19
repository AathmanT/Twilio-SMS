const express = require('express');
var bodyParser = require('body-parser');
var multer =require('multer');
var upload = multer({ dest: 'uploads/' });

const accountSid = 'AC39412ff683843df55173adb511f4f79c';
const authToken = 'ad79b25b33d5fb6940c7b8e97df78dbb';

const client = require('twilio')(accountSid,authToken);

var app = express();

app.use(bodyParser.json());
//app.use(express.bodyParser());

app.get('/',(req,res)=>{
    res.send('<h1>Hello Twilio SMS Backend</h1>');
});

app.get('/hello',(req,res)=>{
   // res.send('<h1>Hello Twilio </h1>');

});


app.post('/send',(req,res)=>{
    //res.send(req.body.To+req.body.Body);

    req.on('data', (data) => {
        console.log(data.toString());

    });

    console.log(req.body.To+req.body.Body);
    //console.log(req.body.To);
    client.messages.create({
        to:'+94769371126',
        from:'+19892827730',
      //  body:'Twilio test sms' "http://maps.google.com/?q=" + req.body.lat + " , " + req.body.lon
        body:'Twilio test sms' +" http://maps.google.com/?q=" + "6.7968" + "," + "79.9009"
    }).then((message)=>{
        console.log(message.sid);
    });
});

app.post('/send1',upload.single('To'),(req,res)=>{
    res.send(req.file+" "+req.body);
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});
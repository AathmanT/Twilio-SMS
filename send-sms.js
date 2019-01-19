const accountSid = 'AC39412ff683843df55173adb511f4f79c';
const authToken = 'ad79b25b33d5fb6940c7b8e97df78dbb';

const client = require('twilio')(accountSid,authToken);

client.messages.create({
    to:'+94769371126',
    from:'+19892827730',
    body:'Twilio test sms'
}).then((message)=>{
    console.log(message.sid);
});
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
token = process.env.TOKEN;
const bot = new TelegramBot(token,{polling:true});

bot.on('message',(msg)=>{
   lightBuh(msg.text);
   console.log(msg.text)
    
})
function lightBuh(someText){
    let debet = someText.match(/\+\d+/g);
    console.log(debet);

}
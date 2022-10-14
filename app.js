const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    lightBuh(msg.text, msg.from.id);

})

function lightBuh(someText, id) {
    let debet, credit = ''
    let coins = (someText.match(/\+\d+/g) != null) ? someText.match(/\+\d+/g)[0] :
        (someText.match(/\-\d+/g) != null) ? someText.match(/\-\d+/g)[0] : (answerBot(Error, id), 0)
    coins[0] === '-' ? credit = +coins : debet = +coins;
    let description = someText.match(/[A-ZА-Яії ]+/gi)[0];
    console.log(description);
}

function answerBot(message, id) {
    bot.sendMessage(id, message)
}
const Error = "Вкажіть будь ласка це доходи чи витрати"
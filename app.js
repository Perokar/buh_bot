const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const { saveDataUser } = require('./dataShems')
require('dotenv').config();
token = process.env.TOKEN;
dataBase = process.env.DATABASE
const bot = new TelegramBot(token, { polling: true });
// database test
conn().catch(err => { console.log(`Mongoose connect error ${err}`) });
async function conn() {
    await mongoose.connect(dataBase)
}

bot.onText(/\/start/, async(msg) => {
    let idUser = { 'id': await msg.from.id }
    saveDataUser(idUser)
})
bot.on('message', (msg) => {

    lightBuh(msg.text, msg.from.id);

})


function lightBuh(someText, id) {
    let debet = credit = 0;
    let coins = (someText.match(/\+\d+/g) != null) ? someText.match(/\+\d+/g)[0] :
        (someText.match(/\-\d+/g) != null) ? someText.match(/\-\d+/g)[0] : (answerBot(Error, id), 0)
    coins[0] === '-' ? credit = +coins : debet = +coins;
    let description = someText.match(/[A-ZА-Яії ]+/gi)[0];
    let newOrder = {
            'id': id,
            'debet': debet,
            'credit': credit,
            'description': description,
            'date': new Date()
        }
        //console.log(newOrder)
}

function answerBot(message, id) {
    return bot.sendMessage(id, message)
}
const Error = "Вкажіть будь ласка це доходи чи витрати"
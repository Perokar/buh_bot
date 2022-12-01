const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const { saveDataUser, addCoin, findCoin } = require('./dataShems')
require('dotenv').config();
token = process.env.TOKEN;
dataBase = process.env.DATABASE
const bot = new TelegramBot(token, { polling: true });
// database test
conn().catch(err => { console.log(`Mongoose connect error ${err}`) });
async function conn() {
    await mongoose.connect(dataBase)
}


bot.on('message', async(msg) => {
    console.log(msg.text)
<<<<<<< HEAD
    if(msg.text==="\/find"){   
        let data =  await findCoin(await msg.from.id);
        return false;
=======
    if (msg.text === "\/find") {
        let data = await findCoin(await msg.from.id);
    }
    if (msg.text === "\/start") {
        bot.sendMessage(msg.from.id, Hi)
        return saveDataUser({ 'id': await msg.from.id });
    } else {
        +200
        return lightBuh(msg.text, msg.from.id);
>>>>>>> 1dac4ef72393b5fd997fa09c3a060bfa5f49592d
    }

})

async function lightBuh(someText, id) {
    let debet = credit = 0;
    let coins = (someText.match(/\+\d+/g) != null) ? someText.match(/\+\d+/g)[0] :
        (someText.match(/\-\d+/g) != null) ? someText.match(/\-\d+/g)[0] : "Error";
    if (coins === "Error") {
        return answerBot(Error, id);
    }
    switch (coins[0]) {
        case ('-'):
            credit = +coins;
            console.log("credit" + credit)
            break;
        case ('+'):
            debet = +coins;
            console.log("debet " + debet);
            break;
    }
    // coins[0] === '-' ? credit = +coins : debet = +coins;
    // if (coins[0]==='='){
    //     return answerBot()
    // }
    let description = someText.match(/[A-ZА-Яії ]+/gi) != null ? someText.match(/[A-ZА-Яії ]+/gi)[0] : (answerBot(Error2, id), 0);
    let newOrder = {
        'id': id,
        'debet': await debet,
        'credit': await credit,
        'description': await description,
        'date': new Date()
    }
    if ((newOrder[debet] != 0 || newOrder[credit] != 0) && description != 0) {
        console.log(`Good order ${newOrder}`)

    } else {
        console.log((newOrder[debet] != 0 || newOrder[credit] > 0));
        console.log(newOrder)
    }
    //addCoin(newOrder)
}

function answerBot(message, id) {
    return bot.sendMessage(id, message)
}
const Error = "Вкажіть будь ласка це доходи чи витрати";
const Error2 = "Ви забули надати опис до руху коштів";
const Error3 = "Ви або отримали гроші тоді сумма зі знаком \"+\"\, або витратили сумма зі знаком \-"
const Hi = "Це телеграм бот для ведення домашньої індивідуальної бухгалтерії\. Розходи та доходи, просто щоб відслідковувати рух коштів в гаманці. Для того щоб ознайомитись з правилами користування прочитайте правила в Меню";
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    id: Number
});
const User = mongoose.model('Users', userSchema);
const coinSchema  = new mongoose.Schema({
    idUser:{type:mongoose.Types.ObjectId,ref:"User"},
    debet:Number,
    credit:Number,
    description:String,
    date:Date
});
const coinModel = mongoose.model('Coins',coinSchema);
async function addCoin(dataCoin){

    if (await User.findOne({id:dataCoin.id})!=null){
        let cent = new coinModel(dataCoin);
        await cent.save();
    }
}

// const fluffy = new Kitten({ name: 'fluffy' });
async function findCoin(userId){
    console.log(userId)
    let data = await coinModel.find({id:userId});
    console.log(data)
}
async function saveDataUser(userData) {
    let check = await User.findOne({id:userData.id});
    if (check===null){
        const user = new User(userData);
        await user.save()
    }
    else{
        console.log('User already excist')
    }
}
module.exports = { saveDataUser,addCoin,findCoin }
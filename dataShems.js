const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    id: Number
});
const User = mongoose.model('Users', userSchema);

// const fluffy = new Kitten({ name: 'fluffy' });
async function saveDataUser(userData) {
    const user = new User(userData);
    await user.save();
}
module.exports = { saveDataUser }
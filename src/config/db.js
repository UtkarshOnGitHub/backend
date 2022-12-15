const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect('mongodb+srv://emi:emi@cluster0.r1efyyx.mongodb.net/emi');
}
module.exports = dbConnect;
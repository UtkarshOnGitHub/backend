const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
},
{ 
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
}
)
const User = mongoose.model('user',UserSchema);
module.exports  = User;
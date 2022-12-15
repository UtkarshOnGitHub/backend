const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title:{type:String},
    quantity:{type:Number},
    priority:{type:String},
    descriptiom:{type:String}
},
{ 
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
}
)
const List = mongoose.model('list',ListSchema);
module.exports  = List;
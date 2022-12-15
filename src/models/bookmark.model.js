const mongoose = require('mongoose');

const BookMarkSchema = new mongoose.Schema({
    title:{type:String},
    quantity:{type:Number},
    priority:{type:String},
    description:{type:String}
},
{ 
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
}
)
const Bookmark = mongoose.model('bookmark',BookMarkSchema);
module.exports  = Bookmark;
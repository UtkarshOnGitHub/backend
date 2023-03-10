const express = require('express');
const Bookmark = require('../models/bookmark.model');
const List = require('../models/list.model');

const ShoppingRouter = express.Router();



ShoppingRouter.get("/",(req,res)=>{
    res.send("Welocme To Shopify")
})

var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var seconds = currentTime.getSeconds()
if (minutes < 10)
    minutes = "0" + minutes
if(seconds < 10){
    seconds = "0" + seconds
}
let time = `${hours}:${minutes}:${seconds}`
console.log(time)
ShoppingRouter.post("/addItem" , async (req,res)=>{
    const {title,quantity,priority,description} = req.body;
    try {
        const item = new List({title,quantity,priority,description,time});
        await item.save() 
        res.send("Item Added Succsessfully")
    } catch (error) {
        console.log(error)
    }
})


ShoppingRouter.get("/getItem" , async(req,res)=>{
    const data  = await List.find({});
    res.send({data:data})
})



ShoppingRouter.delete("/:id" , async(req,res)=>{
    const {id} = req.params
    try {
        await List.findByIdAndDelete(id);
        res.send("Item Deleted")
    } catch (error) {
        console.log(error)
    }
})


ShoppingRouter.get("/bookmark" , async(req,res)=>{
    const data = await Bookmark.find({})
    res.send({data:data})
})

ShoppingRouter.post("/addbookmark/:id" , async(req,res)=>{
        const {id} = req.params
        try {
            const data  = await List.findById(id)
            console.log(data)
            const newBookMark = new Bookmark({title:data.title,quantity:data.quantity,priority:data.priority,description:data.description})
            await newBookMark.save()
            res.send("BookMark Added")
        } catch (error) {
            
        }
})




module.exports = ShoppingRouter;
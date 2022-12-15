const express = require('express');
const List = require('../models/list.model');

const ShoppingRouter = express.Router();



ShoppingRouter.get("/",(req,res)=>{
    res.send("Welocme To Shopify")
})

ShoppingRouter.post("/addItem" , async (req,res)=>{
    const {title,quantity,priority,description} = req.body;
    try {
        const item = new List({title,quantity,priority,description});
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



ShoppingRouter.delete("/delItem" , async(req,res)=>{
    const {id} = req.params
    try {
        await List.findByIdAndDelete(id);
        res.send("Item Deleted")
    } catch (error) {
        console.log(error)
    }
})



module.exports = ShoppingRouter;
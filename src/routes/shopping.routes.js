const express = require('express');

const ShoppingRouter = express.Router();



ShoppingRouter.get("/",(req,res)=>{
    res.send("Welocme To Shopify")
})


module.exports = ShoppingRouter;
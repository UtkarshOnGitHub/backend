const express = require('express');
const {User} = require('../models/index.js');
const UserRouter = express.Router();

UserRouter.get('/',(req,res)=>{
    res.send("Wellcome Hai Ji");
})
UserRouter.post('/register',async(req,res)=>{
    const {email,name,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            return res.status(401).send("User is already signup");
        };
        const newUser =  new User(req.body);
        await newUser.save();
        res.send(newUser);
    }catch(e){
        return res.status(500).send({error:e.message});
    }
})
UserRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(404).send("User is not found please signup first")
        }
        if (user.password!=password) {
            return res.status(401).send("Wrong password");
        }
        res.send({ token: `${user.id}:${user.email}:${user.password}` });
    } catch (er) {
        res.status(500).send(er.message)
    }
})
UserRouter.get('/getProfile',async(req,res)=>{
    let token = req.headers.token;
    let [id, email, password] = token.split(":");
    try {
        let user = await User.findById(id);
        res.send({name:user.name,id:user.id,email:user.email});
    } catch (er) {
        res.status(500).send(er.message)
    }

})

module.exports = UserRouter;
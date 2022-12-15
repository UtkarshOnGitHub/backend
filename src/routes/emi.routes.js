const express = require('express');
const Authmiddleware = require('../middlewares/Auth.middleware');
const EmiRouter = express.Router();

EmiRouter.post('/',async(req,res)=>{
    const {loan,annualInterest,time} = req.body;
    try {
        if(!loan || !annualInterest || !time){
            return res.status(501).send('Please fillup All the fields')
        }
        let R = (annualInterest/12)/100;
        let newValue = Math.pow(1+R,time);
        let emiValue = ((loan*R*newValue)/(newValue-1)).toPrecision(4);
        let total=  emiValue*time;
        let interest = total-loan;
        res.send({msg:'Successfully',data:{
            EMI:emiValue,
            interest,
            total
        }})

        
    } catch (er) {
        res.status(500).send(er.message)
    }

})

module.exports = EmiRouter;
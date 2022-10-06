const User = require('../models/User')

 async function create_User(req,res){
    try{
        const result = await User.findOne({
            email: req.body.email,
            password : req.body.password,
        });
        if(result){
            res.status(500).json("Error");
        }else{
            res.status(500).json('Error');
        }
    } catch(error){
        res.status(500).json(error);
    }
};

 async function user_register (req,res) {
    try{
       const newuser = new User(req.body);
       await newuser.save();
       res.send('User Registered successfully')
    } catch(error){
        res.status(500).json(error);
    }
};

module.exports = {
    create_User,
    user_register
};
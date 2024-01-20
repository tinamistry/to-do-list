const User = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const secretkey = process.env.secretkey

const register = async (req, res) =>{
    try{
        const{firstName, lastName, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({firstName, lastName, email, passwordHash:hashedPassword})
        await user.save()
            .then(user => {
                console.log('User saved successfully:', user);
                 })
            .catch(error => {
                    console.error('Error saving user:', error);
            });
        res.status(201).json({message: 'Registration Succeeded'})
    }
    catch(error){
        res.status(500).json({message: 'Registration failed ' + error})
    }
}

const login = async(req, res) =>{
    console.log("in controller")
    try{
        const{email, password} = req.body
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            console.log("no user found")
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const passwordMatch = await bcrypt.compare(password, user.passwordHash);

          if (!passwordMatch) {
            console.log("no password match")
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const token = jwt.sign({ userId: user._id, email: user.email }, secretkey, {
            expiresIn: '2h',
          });
          res.status(200).json({token, user});
    }
    catch(error){
        res.status(500).json({message: 'Login failed' + error})
    }
}




module.exports = {
    register,
    login
};

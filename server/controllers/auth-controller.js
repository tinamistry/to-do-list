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
    try{
        const{email, password} = req.body
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const passwordMatch = await bcrypt.compare(password, user.passwordHash);

          if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const token = jwt.sign({ userId: user._id }, secretkey, {
            expiresIn: '2h',
          });
          res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });
          res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
    }
    catch(error){
        res.status(500).json({message: 'Login failed' + error})
    }
}

const userVerification = (req, res) =>{
    const token = req.cookies.token
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.secretkey, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {
        const user = await User.findById(data.id)
        if (user) return res.json({ status: true, user: user.username })
        else return res.json({ status: false })
      }
    })

}




module.exports = {
    register,
    login,
    userVerification
};

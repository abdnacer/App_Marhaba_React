const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const validator = require('validator')

// Login User
const loginUser = async (req, res) => {
  res.json({ message: 'Login User' })
}

// Reister User
const registerUser = async (req, res) => {
  const { email, password } = req.body

  if(!email || !password){
    res.send('All Fields must be fielled')
  }

  // if(!validator.isEmail(email)){
  //   res.send('Email is not validate')
  // }
  
  // if(!validator.isStrongPassword(password)){
  //   res.send('Password is not validate')
  // }


  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400).json({ message: 'user already exists' })
  }

  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = await User.create({ email, password: passwordHash })

  if(user){
    res.status(200).json(user)
  }

  res.status(400).json({message: 'user not registed'})
}

module.exports = {
  loginUser,
  registerUser
}
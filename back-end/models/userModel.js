const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

userSchema.statics.register = async (email, password) => {
  if(!email || !password){
    throw Error('All Fields must be fielled')
  }

  if(!validator.isEmail(email)){
    throw Error('Email is not validate')
  }
  
  if(!validator.isStringPassword(password)){
    throw Error('Password is not validate')
  }

  const userExists = await this.find({ email })

  if (userExists) {
    throw Error('Email already Exists')
  }

  const salt = await bcrypt.genSalt(10)
  const passwordHashed = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: passwordHashed })

  return user
}

module.exports = mongoose.model('User', userSchema)
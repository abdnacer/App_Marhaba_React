const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
var storage = require('local-storage')
const User = require('../models/userModel')
const Role = require('../models/roleModel')
const mainMail = require('../middleware/mailer')

const regsiterUser = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body

  if (first_name === '' || last_name == '' || email == '' || password == '' || password != confirm_password)
    throw Error('Please fill all the fields')

  const userExists = await User.findOne({ email })

  if (userExists) {
    throw Error('User already Exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  const role = "636f4be7143801d24aa53e2e"

  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashPassword,
    role,
    verification: false
  })

  if (user) {
    mainMail.main('verify-email', email)
    throw Error('Check Your Email')
  }
  if (!user) {
    throw Error('Invalid User Data')
  }
}

const registerLivreur = async (req, res) => {
  const { first_name, last_name, email, password } = req.body

  if (first_name == '' || last_name == '' || email == '' || password == '') throw Error('Please fill all the fields')

  const userExists = await User.findOne({ email })

  if (userExists) throw Error('User already Exists')

  const salt = await bcrypt.genSalt(10)
  const hash_Pass_Livreur = await bcrypt.hash(password, salt)
  const role = '636f4be7143801d24aa53e2f'

  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hash_Pass_Livreur,
    role,
    verification: false
  })

  if (user) {
    mainMail.main('verify-email', email)
    throw Error('Check Your Email')
  }

  if(!user) throw Error("Invalid User Data")
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (email == '' || password == '') throw Error('Please Fill All The Fiealds')

  const user = await User.findOne({ email })

  if (!user) throw Error('Email or Password is incorrect')
  if (!user.verification) throw Error('check your email to active your account')

  const correctPassword = await bcrypt.compare(password, user.password)

  if (user && correctPassword) {
    const role = await Role.findById({ _id: user.role })
    const token = generateToken(user.id)
    storage('token', token)
    res.json({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      role: role.name,
      token: token
    })
  }
  else {
    throw Error('Invalid creadtials')
  }
}

const verifyEmail = async (req, res) => {
  const verify_email = await jwt.verify(req.params.token, process.env.SECRET)

  const verifyUser = await User.findOne({ email: verify_email.email })
  if (verifyUser && verifyUser.verification === true) res.redirect('http://localhost:3000/login');

  const verification_email = await User.updateOne({ email: verify_email.email }, { $set: { verification: true } })
  if (verification_email) res.redirect('http://localhost:3000/login');
  if (!verification_email) throw Error("You can't to active your account")
}

const resetPassword = async (req, res) => {
  const { last_Password, nouveau_password, confirm_Password } = req.body

  if (last_Password == '' || nouveau_password == '' || confirm_Password == '') throw Error('Please fill all the fields')
  if (nouveau_password != confirm_Password) throw Error('Password Not Matched')

  const token = storage('token')
  const verifyToken = await jwt.verify(token, process.env.SECRET)
  const find_User_id = await User.findById(verifyToken.id)
  if (find_User_id) {
    const Pass_Correct = await bcrypt.compare(last_Password, find_User_id.password)
    if (!Pass_Correct) throw Error('Password Not Correct')
    const salt = await bcrypt.genSalt(10)
    const new_Pass_Hashed = await bcrypt.hash(nouveau_password, salt)
    const newPassword = await User.updateOne({ _id: find_User_id._id }, { $set: { password: new_Pass_Hashed } })
    res.send('Password Your Changed')
    res.redirect(`http://localhost:3000/${find_User_id.role}`);
  }

}

const ForgotPassword = async (req, res) => {
  const { email } = req.body

  if (email == '') throw Error('Enter Your Email')
  const forgot_Password_email = await User.findOne({ email })

  if (!forgot_Password_email) throw Error('User Not Found')
  mainMail.main('verify-forgot-password', email)
  res.send('Check Your Email')
}

const verifyForgotPassword = async (req, res) => {
  const token = req.params.token
  const verify_token = await jwt.verify(token, process.env.SECRET)
  const verify_token_email = await User.findOne({ email: verify_token.email })
  const new_token = await jwt.sign({ id: verify_token_email.id }, process.env.SECRET)

  // res.json({ message: 'form-forgot-password', token: new_token })
  res.redirect('http://localhost:3000/form-forgot-password/' + new_token);
}

const formForgotPassword = async (req, res) => {
  const { password, confirm_password, token } = req.body

  if (token == '' || password == '' || confirm_password == '') throw Error('Please fill all the fields to change your Password')
  if (password != confirm_password) throw Error('Password not mathed')

  const verify_form_token = await jwt.verify(token, process.env.SECRET)
  const find_forgot_user = await User.findById(verify_form_token.id)
  if (!find_forgot_user) throw Error('Error, User not Foun, replay to check your email')
  const salt = await bcrypt.genSalt(10)
  const forgotPass_hashed = await bcrypt.hash(password, salt)
  const update_password = await User.updateOne({ _id: find_forgot_user._id }, { $set: { password: forgotPass_hashed } })
  res.send('Your Password is updated')
}

const logout = async (req, res) => {
  storage.clear()
  res.send('Your are Logout')
}

// Generate Token
const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d'
  })

  return token
}

module.exports = {
  regsiterUser,
  registerLivreur,
  verifyEmail,
  resetPassword,
  loginUser,
  ForgotPassword,
  verifyForgotPassword,
  formForgotPassword,
  logout
}
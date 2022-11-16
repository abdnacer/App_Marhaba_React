const router = require('express').Router()

const {
  regsiterUser,
  registerLivreur,
  loginUser,
  verifyEmail,
  resetPassword,
  ForgotPassword,
  verifyForgotPassword,
  formForgotPassword,
  logout
} = require('../controllers/userController')

const { tryCatch } = require('../middleware/tryCatch')
const { errorHandler } = require('../middleware/errorHandler')
const { authPermission, userPermission } = require('../middleware/permission')

router.post('/register', authPermission, tryCatch(regsiterUser))
router.post('/registerLivreur', userPermission, tryCatch(registerLivreur))
router.post('/login', authPermission, tryCatch(loginUser))
router.get('/verify-email/:token', tryCatch(verifyEmail))
router.post('/reset-password', userPermission, tryCatch(resetPassword))
router.post('/forgot-password', authPermission, tryCatch(ForgotPassword))
router.get('/verify-forgot-password/:token', authPermission, tryCatch(verifyForgotPassword))
router.post('/form-forgot-password', authPermission, tryCatch(formForgotPassword))
router.get('/logout', userPermission, tryCatch(logout))

router.use(errorHandler)

module.exports = router
const router = require('express').Router()
const { livreurUser, managerUser, clientUser } = require('../controllers/authController')

// Error Handler
const { tryCatch } = require('../middleware/tryCatch')
const { errorHandler } = require('../middleware/errorHandler')
const { authPermission, userPermission } = require('../middleware/permission')

router.get('/livreur/me', userPermission, tryCatch(livreurUser))
router.get('/manager/me', userPermission, tryCatch(managerUser))
router.get('/client/me', userPermission, tryCatch(clientUser))

router.use(errorHandler)

module.exports = router
const router = require('express').Router()
const userServices = require('./users.services')

router.get('/users', userServices.getUsers)
router.get('/users/:id', userServices.getOneUser)

router.post('/users', userServices.createNewUser)

module.exports = router
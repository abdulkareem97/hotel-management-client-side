const express = require('express')
const router = express.Router()

const {getAllUsers,createUser,getSingleUser} = require('../controllers/users')

router.route('/').get(getAllUsers).post(getSingleUser)
router.route('/signup').post(createUser)


module.exports = router
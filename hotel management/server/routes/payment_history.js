const express = require('express')
const { addPaymentHistory } = require('../controllers/payment_history')
const router = express.Router()

router.route('/').post(addPaymentHistory)



module.exports = router

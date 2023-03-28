const express = require('express')

const { addPaymentHistory, getPaymentHistory } = require('../controllers/payment_history')
const router = express.Router()


router.route('/:id').get(getPaymentHistory)
router.route('/').post(addPaymentHistory)



module.exports = router

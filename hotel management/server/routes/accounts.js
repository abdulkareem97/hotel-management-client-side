const express = require('express')
const router = express.Router()
const {addAccount,getAccount,checkReferalCode,addAmount} = require('../controllers/accounts')

router.route('/add').post(addAccount).patch(addAmount)
router.route('/get/:id').get(getAccount)
router.route('/referal/:code').get(checkReferalCode)

// router.route('/add/:aid/:amount').patch(addAmount)


module.exports = router
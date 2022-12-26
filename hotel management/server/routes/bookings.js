const express = require('express')
const { addBooking, getPendingBooking, updateStatus } = require('../controllers/booking')
const router = express.Router()

router.route('/:id').get(getPendingBooking)
router.route('/').post(addBooking).patch(updateStatus)



module.exports = router
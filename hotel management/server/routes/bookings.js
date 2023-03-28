const express = require('express')
const { addBooking, getPendingBooking, updateStatus, getBookingsForXl } = require('../controllers/booking')
const router = express.Router()

router.route('/:id').get(getPendingBooking)
router.route('/').post(addBooking).patch(updateStatus)
router.route('/excel').post(getBookingsForXl)



module.exports = router
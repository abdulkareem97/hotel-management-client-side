const express = require('express')
const router = express.Router()
const {addRating, updateRating, setHotelRating} = require('../controllers/rating')

router.route('/').post(addRating).patch(updateRating)
router.route('/update').patch(setHotelRating)


// router.route('/add/:aid/:amount').patch(addAmount)


module.exports = router
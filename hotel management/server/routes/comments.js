const express = require('express')
const router = express.Router()
const { addComment, getComments } = require('../controllers/comment')


router.route('/:id').get(getComments)
router.route('/').post(addComment)

// router.route('/update').patch(setHotelRating)


// router.route('/add/:aid/:amount').patch(addAmount)


module.exports = router
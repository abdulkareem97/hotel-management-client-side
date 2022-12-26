const express = require('express')
const router = express.Router()
const {getAllHotels,addHotel,getHotel, getMyHotel} = require('../controllers/hotels')

router.route('/').get(getAllHotels).post(addHotel)
router.route('/all/:id').get(getHotel)
router.route('/myhotel/:userId').get(getMyHotel)


module.exports = router
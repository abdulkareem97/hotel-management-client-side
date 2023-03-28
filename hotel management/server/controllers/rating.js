

const db = require('../db/connection')


const addRating = async (req, res) => {
    const { user_id, hotel_id, rating } = req.body
    sql = `INSERT INTO rating(user_id,hotel_id,rating) VALUES(?,?,?);`
    try {
        await db.query(sql, [Number(user_id), Number(hotel_id), Number(rating)])
        return res.status(201).json(req.body)

    } catch (error) {
        // console.log(error)
        // return res.json(error)
        return res.status(404).json({ success: false, msg: 'Server Error Can.t create account now' })

    }
}
const updateRating = async (req, res) => {
    const { user_id, hotel_id, rating } = req.body
    sql = `UPDATE rating SET rating=? WHERE user_id=? AND hotel_id=?;`
    try {
        await db.query(sql, [Number(rating), Number(user_id), Number(hotel_id)])
        return res.status(201).json({ success: true, msg: 'Rating Updated..' })

    } catch (error) {
        // console.log(error)
        // return res.json(error)
        return res.status(404).json({ success: false, msg: 'Server Error Can.t create account now' })

    }
}


const setHotelRating = async (req,res) => {
    const {hotel_id } = req.body

    const sql =`UPDATE hotels SET rating=(SELECT avg(rating) FROM rating WHERE hotel_id=?) WHERE hotel_id=?;`
    try {
        await db.query(sql, [Number(hotel_id),Number(hotel_id)])
        return res.status(201).json({ success: true, msg: 'Rating Updated..' })

    } catch (error) {
        console.log(error)
        // return res.json(error)
        return res.status(404).json({ success: false, msg: 'Server Error' })

    }

}






module.exports = { addRating,updateRating,setHotelRating }
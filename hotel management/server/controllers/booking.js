const db = require('../db/connection')


const addBooking = async (req, res) => {
    const { user_id, hotel_id, amount, status } = req.body
    const sql = `INSERT INTO bookings(b_id,user_id,hotel_id,amount,status,updated_at) VALUES(null,?,?,?,?,now());`
    try {
        await db.query(sql, [user_id, hotel_id, amount, status])
        return res.status(201).json(req.body)

    } catch (error) {
        // return res.json(error)
        return res.status(404).json({ success: false, msg: 'Server Error' })

    }
}

const getPendingBooking = async (req, res) => {
    // SELECT b.hotel_id,b.amount,u.email,u.name from bookings b,hotels h,users u WHERE u.user_id = b.user_id AND h.hotel_id = b.hotel_id AND b.status="pending" AND mgr_id = 8;

    const id = req.params.id

    // console.log(id)
    const sql = `SELECT b.b_id,b.hotel_id,b.amount,u.email,u.name,u.user_id,h.mgr_id from bookings b,hotels h,users u WHERE u.user_id = b.user_id AND h.hotel_id = b.hotel_id AND b.status="pending" AND mgr_id = ?;`
    try {
        const bookings = await db.query(sql, Number(id))

        return res.status(200).json(bookings[0])

    } catch (error) {
        return res.status(404).json({ success: false })

    }
}

const updateStatus = async (req, res) => {
    const { b_id, status } = req.body
    const sql = `UPDATE bookings SET status=?,updated_at=now() WHERE b_id=?;`
    try {
        await db.query(sql, [status, b_id])
        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(404).json({ success: false })

    }

}




module.exports = { addBooking, getPendingBooking,updateStatus }
const db = require('../db/connection')


const addBooking = async (req, res) => {
    const { user_id, hotel_id, no_of_rooms, no_of_days, amount, status } = req.body
    const sql = `INSERT INTO bookings(b_id,user_id,hotel_id,no_of_rooms,no_of_days,amount,status,updated_at) VALUES(null,?,?,?,?,?,?,now());`
    try {
        await db.query(sql, [user_id, hotel_id, no_of_days, no_of_days, amount, status])
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
    const sql = `SELECT b.b_id,b.hotel_id,b.amount,b.no_of_rooms,b.no_of_days,u.email,u.name,u.user_id,h.mgr_id,h.hotel_name from bookings b,hotels h,users u WHERE u.user_id = b.user_id AND h.hotel_id = b.hotel_id AND b.status="pending" AND mgr_id = ?;`
    try {
        const bookings = await db.query(sql, Number(id))

        return res.status(200).json(bookings[0])

    } catch (error) {
        return res.status(404).json({ success: false })

    }
}

const getBookingsForXl = async (req, res) => {
    const { startDate, endDate, conditions, hotel_id } = req.body
    const sql = `SELECT b.b_id,b.hotel_id,u.email,u.name,b.no_of_rooms,b.no_of_days,b.amount,b.status,b.updated_at as date from bookings b,hotels h,users u WHERE u.user_id = b.user_id AND h.hotel_id = b.hotel_id  AND b.hotel_id = ? AND (b.updated_at BETWEEN ? AND ?) AND (b.status IN ${conditions}) GROUP BY b.updated_at ASC;`

    try {
        const excelData = await db.query(sql,[Number(hotel_id),startDate,endDate])

        return res.status(200).json(excelData[0])

        
    } catch (error) {
        console.log(error)
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




module.exports = { addBooking, getPendingBooking, updateStatus,getBookingsForXl }
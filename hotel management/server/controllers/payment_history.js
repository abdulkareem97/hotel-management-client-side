
const db = require('../db/connection')

const addPaymentHistory = async (req, res) => {
    const { from_id, too_id, amount } = req.body
    const sql = `INSERT INTO payment_history(ph_id,from_id,too_id,amount,time) VALUES(null,?,?,?,now());`
    try {
        await db.query(sql, [Number(from_id), Number(too_id), Number(amount)])

        return res.status(200).json({ success: true, msg: 'Row Inserted' })

    } catch (error) {
        return res.status(404).json({ success: false, msg: 'Server Error' })

    }
}

const getPaymentHistory = async (req, res) => {
    const id = req.params.id
    const sql = `SELECT fu.user_id as from_id,fu.name as from_name,fu.email as from_email,tu.user_id as to_id,tu.name as to_name,tu.email as to_email,p.amount,p.time  FROM payment_history p,users fu,users tu WHERE
    ( p.from_id = ? OR p.too_id = ?) AND
    p.from_id = fu.user_id AND
    p.too_id = tu.user_id ORDER BY time DESC LIMIT 5;`
    try {
        const history = await db.query(sql, [Number(id), Number(id)])
        return res.status(200).json(history[0])

    } catch (error) {
        return res.status(404).json({ success: false, msg: 'Server Error' })

    }
}




module.exports = { addPaymentHistory, getPaymentHistory }


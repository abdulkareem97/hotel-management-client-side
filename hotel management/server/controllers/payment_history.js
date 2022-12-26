
const db = require('../db/connection')

const addPaymentHistory = async (req,res)=>{
    const {from_id,too_id,amount} = req.body
    const sql = `INSERT INTO payment_history(ph_id,from_id,too_id,amount,time) VALUES(null,?,?,?,now());`
    try {
         await db.query(sql,[Number(from_id),Number(too_id),Number(amount)])

        return res.status(200).json({ success: true, msg: 'Row Inserted' })
        
    } catch (error) {
        return res.status(404).json({ success: false, msg: 'Server Error' })
        
    }
}




module.exports = { addPaymentHistory }


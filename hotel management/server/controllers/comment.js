

const db = require('../db/connection')


const addComment = async (req, res) => {
    const { user_id, hotel_id, msg } = req.body
    sql = `INSERT INTO comments(cid,user_id,hotel_id,msg,time) VALUES(null,?,?,?,now());`
    try {
        await db.query(sql, [Number(user_id), Number(hotel_id),msg])
        return res.status(201).json(req.body)

    } catch (error) {
        // console.log(error)
        // return res.json(error)
        return res.status(404).json({ success: false, msg: 'Server Error comment now' })

    }
}

const getComments = async (req,res) => {
    const hotel_id = req.params.id
    const sql = `SELECT u.user_id,u.name,u.email,c.cid,c.hotel_id,c.msg,c.time FROM users u,comments c WHERE u.user_id= c.user_id AND c.hotel_id = ? GROUP BY c.time DESC LIMIT 5;`



    try {
        const comments = await db.query(sql, Number(hotel_id))

        return res.status(200).json(comments[0])
        
    } catch (error) {
        return res.status(404).json({ success: false, msg: 'Server Error' })
        
    }

}








module.exports = { addComment,getComments }


const db = require('../db/connection')


const addAccount = async (req, res) => {
    const { user_id,amount,referal_code,upi_pin,card_no } = req.body
    sql = `insert into accounts(aid,user_id,amount,referal_code,upi_pin,card_no) values(null,?,?,?,?,?);`
    try {
         await db.query(sql, [user_id, amount, referal_code, upi_pin,card_no])
        return res.status(201).json(req.body)

    } catch (error) {
        // console.log(error)
        // return res.json(error)
        return res.status(404).json({success:false,msg:'Server Error Can.t create account now'})

    }
}

const getAccount = async  (req,res)=>{
    const id = req.params.id
    
    // console.log(id)
    const sql = `select * from accounts where user_id=?;`
    const account = await db.query(sql,Number(id))
    if(account[0].length===0)
    {
       return res.status(404).json({success:false,msg:'account doesnt exists'})
    }
    return res.status(200).json(account[0])
}

const checkReferalCode = async  (req,res)=>{
    const code = req.params.code
    // console.log(id)
    const sql = `select * from accounts where referal_code=?;`
    const account = await db.query(sql,[code])
    if(account[0].length===0)
    {
       return res.status(404).json({success:false,msg:'Invalid Referal Code'})
    }
    return res.status(200).json(account[0])
}

const addAmount = async  (req,res)=>{
    const {amount,user_id} = req.body
    
    // console.log(id)
    const sql = `UPDATE accounts SET amount = amount+? WHERE aid IN (SELECT aid from users u,accounts a WHERE u.user_id = a.user_id AND u.user_id=?);`
    try {
        await await db.query(sql,[Number(amount),Number(user_id)])
       return res.status(202).json({success:true,msg:'Amount has been updated'})

   } catch (error) {
       console.log(error)
       // return res.json(error)
       return res.status(404).json({success:false,msg:'Bank server error'})

   }
}
 

module.exports = {addAccount,getAccount,checkReferalCode,addAmount}
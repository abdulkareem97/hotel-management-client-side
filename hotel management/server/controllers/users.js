
const db = require('../db/connection')


const getAllUsers = async  (req,res)=>{
    const sql = `select * from users,roles WHERE roles.role_id=users.role;`
    const users = await db.query(sql)
    return res.json(users[0])
    res.send('all data send')
}

const createUser = async (req,res)=>{
    const {name,email,password,role} = req.body 
    let sql = `select * from users where email=?`
    const user = await db.query(sql,[email])
    console.log(user[0])
    if(user[0].length!==0)
    {
        return res.status(404).json({msg:'user already exists'})
    }
    sql = `insert into users values(null,?,?,?,?);`
    const newUser = db.query(sql,[name,email,password,role])

    return res.status(201).json(newUser)
    // 

}

const getSingleUser =async  (req,res)=>{
    const {email,password} = req.body
    const sql = `select * from users,roles where email=? and password=? AND roles.role_id=users.role;`
    const user = await db.query(sql,[email,password])
    if(user[0].length===0)
    {
       return res.status(404).json({success:false,msg:'user doesnt exists'})
    }
    return res.status(200).json(user[0][0])
    // res.send('all data send')
}



module.exports = {getAllUsers,createUser,getSingleUser}
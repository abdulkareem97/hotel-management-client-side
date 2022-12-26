
const db = require('../db/connection')


const getAllHotels = async (req, res) => {
    const sql = `select * from hotels;`
    const hotels = await db.query(sql)
    return res.json(hotels[0])

}

const addHotel = async (req, res) => {
    const { hotel_name, img, description, rating, price, location, mgr_id } = req.body
    sql = `insert into hotels(hotel_id,hotel_name,img,description,price,rating,location,mgr_id) values(null,?,?,?,?,?,?,?);`
    try {
        const newHotel = await db.query(sql, [hotel_name, img, description, price, rating, location, mgr_id])
        return res.status(201).json(req.body)

    } catch (error) {
        // return res.json(error)
        return res.status(404).json({success:false,msg:'Server Error'})

    }
}

const getHotel = async  (req,res)=>{
    const id = req.params.id
    // console.log(id)
    const sql = `select * from hotels where hotel_id=?;`
    const hotel = await db.query(sql,Number(id))
    if(hotel[0].length===0)
    {
       return res.status(404).json({success:false,msg:'hotel doesnt exists'})
    }
    return res.status(200).json(hotel[0])
}

const getMyHotel =  async  (req,res)=>{
    const id = req.params.userId
    console.log(id)
    const sql = `select * from hotels where mgr_id=?;`
    const hotel = await db.query(sql,[id])
    if(hotel[0].length===0)
    {
       return res.status(404).json({success:false,msg:'hotel doesnt exists'})
    }
    return res.status(200).json(hotel[0][0])
}


module.exports = { getAllHotels, addHotel,getHotel,getMyHotel }

const express = require('express')

const app = express()
const cors = require('cors')


const db = require('./db/connection')

const userRouter = require('./routes/users')
const hotelRouter = require('./routes/hotels')
const accountsRouter = require('./routes/accounts')
const bookingRouter = require('./routes/bookings')
const paymentHistoryRouter = require('./routes/payment_history')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/api/v1/users',userRouter)
app.use('/api/v1/hotels',hotelRouter)
app.use('/api/v1/accounts',accountsRouter)
app.use('/api/v1/bookings',bookingRouter)
app.use('/api/v1/history',paymentHistoryRouter)




app.get('/',(req,res)=>{
    const str = `insert into users values(null,'ak','ak@ka','12345','1');`
    db.query(str,(err)=>{
        if(err)
        {
            console.log(err)
        }
        console.log('inserted successfully')
    })

    res.send('inserted record')
})




app.listen(1000,
    console.log('connected to server ....')
)
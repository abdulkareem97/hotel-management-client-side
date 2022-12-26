import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const AddHotel = (props) => {


    const [hotel_name, sethotel_name] = useState()
    const [img, setimg] = useState()
    const [description, setdescription] = useState()
    const [price, setprice] = useState()
    const [location, setlocation] = useState()


    // {
    //     "hotel_id": 4,
    //     "hotel_name": "a",
    //     "img": "a",
    //     "description": "a",
    //     "location": "a",
    //     "price": 0,
    //     "rating": 0,
    //     "mgr_id": 8
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!hotel_name || !img || !description || !price || !location) {

            props.toastMsg(toast.error, '🦄 Fill all the details')
            return
        }
        // hotels/
        const rating = 0
        const mgr_id = props.user.user_id
        const hotel = {
            hotel_name,
            img,
            description,
            price,
            location,
            mgr_id,
            rating



        }
        console.log(hotel)
        try {
            await axios.post('/api/v1/hotels/', hotel)

            const res = await axios.get('/api/v1/hotels/myhotel/8')

            props.AddHotel(res.data)





            // hotels/myhotel/8

            // props.onSave(user)

        } catch (e) {
            console.log(e.response.data.msg)

            props.toastMsg(toast.error, '🦄 Server Error Please Try Again', 2000)
            //   alert(e)
        }




    }



    return (
        <div className=''>
            <div className="grid place-items-center md:mx-7">
                <ToastContainer />
                {/* user login */}
                <div className='bg-slate-700 mx-3 rounded-md p-6 text-white w-full '>
                    <div className='flex justify-center text-xl underline uppercase'>
                        <span>Add Hotel Details</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <form action="" method="get" onSubmit={handleSubmit} >
                            <div className='flex flex-col space-y-4 pt-4'>

                                <div className=" border rounded-sm 
                                ">
                                    <img className='h-52 '

                                        src={img} alt={img ? 'Image Link is not valid' : 'please provide image link'} />
                                </div>
                                <div className='flex flex-col items-center space-y-3'>




                                    <div>
                                        <input
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                hover:bg-slate-600
                                '
                                            placeholder='Enter Hotel Name'
                                            type="text" value={hotel_name} onChange={(e) => sethotel_name(e.target.value)} />
                                    </div>
                                    <div>
                                        <input
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                hover:bg-slate-600
                                '
                                            placeholder='Povide Image Link'
                                            type="text" value={img} onChange={(e) => setimg(e.target.value)} />
                                    </div>
                                    <div>
                                        <textarea name="" id="" cols="25" rows="5"
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                    hover:bg-slate-600'
                                    value={description} onChange={(e) => setdescription(e.target.value)}
                                            placeholder='Description about hotel'
                                        >

                                        </textarea>
                                    </div>

                                    <div>
                                        <input
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                hover:bg-slate-600
                                '
                                            placeholder='Price Per Day'
                                            type="number" value={price} onChange={(e) => setprice(e.target.value)} />
                                    </div>

                                    <div>
                                        <input
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                hover:bg-slate-600
                                '
                                            placeholder='Location i.e City'
                                            type="text" value={location} onChange={(e) => setlocation(e.target.value)} />
                                    </div>

                                    <div className='flex justify-center'>
                                        <button type="submit" className='bg-black py-3 px-6 rounded-full hover:bg-white hover:text-black'>Add Details</button>

                                    </div>
                                </div>
                            </div>



                        </form>

                    </div>
                    <div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddHotel

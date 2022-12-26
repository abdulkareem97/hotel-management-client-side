import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllHotels = (props) => {

    const [hotels, setHotels] = useState([])




    useEffect(() => {
        async function getAllhotels() {

            try {
                const res = await axios.get('/api/v1/hotels')
                // const res = await axios.get('/api/v1/hotels/myhotel/8')
                // props.AddHotel(res.data)
                // console.log(res.data)
                const data = [...res.data]
                setHotels(data)
            } catch (e) {
                setHotels([])
                // console.log(e.response.data.msg)

                props.toastMsg(toast.error, '🦄 Server Error Please Try Again', 2000)
                //   alert(e)
            }


        }
        getAllhotels()

    }, [])



    return (
        <div className='bg-slate-700'>

            <div>

            </div>
            {/* cards */}
            <div className='grid grid-cols-3 max-md:grid-cols-1 p-4 space-y-4'>


                {/*  */}

                {

                    hotels.map((hotel) => {

                        let ratingStars = []
                        for (let i = 0; i < hotel.rating; i++) {
                            ratingStars.push(i)

                        }

                        return (

                            <div className="w-full max-w-sm  rounded-lg shadow-md bg-gray-800 border-gray-700" key={hotel.hotel_id}>
                                <Link to={'/hotelDetail'} state={{hotel}} className=''>
                                    <img className="p-8 rounded-t-lg" src={hotel.img} alt="hotel image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <a href="#" className='flex justify-center flex-col items-center'>
                                        <h5 className="text-xl font-semibold tracking-tight text-white">{hotel.hotel_name}</h5>
                                        <h5 className="text-xl font-semibold tracking-tight text-slate-400 opacity-75">{hotel.location}</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5 justify-center">
                                        {
                                            ratingStars.map(() => {
                                                return <i className="fa-solid fa-star text-white"></i>
                                               
                                            })
                                        }



                                        <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{hotel.rating}.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-white">{hotel.price} Rs.</span>
                                        <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Details</a>
                                    </div>
                                </div>
                            </div>)

                    })

                }

                <div class="w-full max-w-sm  rounded-lg shadow-md bg-gray-800 border-gray-700">
                    <a href="#">
                        <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
                    </a>
                    <div class="px-5 pb-5 ">
                        <a href="#" className='flex justify-center'>
                            <h5 class="text-xl font-semibold tracking-tight text-white">Hotel Name</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">

                            <span class="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">5.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-white">599 Rs.</span>
                            <a href="#" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Details</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default AllHotels

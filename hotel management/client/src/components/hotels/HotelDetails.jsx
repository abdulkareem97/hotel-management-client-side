import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UpiPinModal from '../Modal/UpiPinModal'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import useCheckIsLogin from '../auth/useCheckIsLogin'
import RatingModal from '../Modal/RatingModal'
import Comments from '../comments/Comments'


const HotelDetails = (props) => {
    const location = useLocation()
    const hd = location.state

    const user = useCheckIsLogin()

    const [hotelDetails, setHotelDetails] = useState([])
    const [isUser, setIsUSer] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [noOfDays, setNoOFDays] = useState()
    const [noOfRooms, setNoOfRooms] = useState()
    const [openModal, setOpenModal] = useState(false)
    const [openRatingModal, setOpenRatingModal] = useState(false)


    useEffect(() => {
        // console.log('hotel details')

        if (props.hotel) {
            // console.log('here')
            console.log(props.hotel)
            setHotelDetails(props.hotel)
            setIsUSer(false)
        } else if (hd) {
            // console.log('hd')
            setHotelDetails(hd.hotel)
            setIsUSer(true)
        }


    }, [props.hotel])


    // const getPrice = ()=>{

    //     if(noOfDays && noOfRooms)
    //     {
    //         setTotalPrice(noOfDays * noOfRooms * hotelDetails.price)
    //         return
    //     }
    //     setTotalPrice(0)
    // }
    useEffect(() => {

        // console.log(props)
        if (noOfDays && noOfRooms) {
            setTotalPrice(noOfDays * noOfRooms * hotelDetails.price)
            return
        }
        setTotalPrice(0)

    }, [noOfDays, noOfRooms])


    const bChange = (e) => {
        // console.log(e.target.name)
        if (e.target.name === 'days') {
            setNoOFDays(e.target.value)


        } else {
            setNoOfRooms(e.target.value)

        }







    }

    const handleModal = () => {
        if (openModal) {
            setOpenModal(false)
            setNoOFDays('')
            setNoOfRooms('')
            return

        }

        if (totalPrice !== 0) {
            setOpenModal(true)
        }
        else {
            props.toastMsg(toast.error, '🦄Fill the details!!!...', 1000)


        }

    }

    const handleBank = async (data) => {
        // console.log(data)
        const amt = data.amount
        if (amt - totalPrice < 0) {
            props.toastMsg(toast.error, '🦄Insufficient Bank Balance')
            handleModal()
            return
        }
        try {

            props.toastMsg(toast.success, `🦄${totalPrice} debited from your account`, 1000)
            // const manager_acc = await axios.get(`/api/v1/accounts/get/${hotelDetails?.mgr_id}`)
            // const user_acc = await axios.get(`/api/v1/accounts/get/${user?.user_id}`)

            // console.log('here')
            // console.log(ref_user)

            // const addAmountToMgr = {
            //     aid : manager_acc.data[0].aid,

            //     amount : totalPrice
            // }
            const debitedAccount = {
                user_id: user.user_id,
                amount: -totalPrice
            }




            // console.log('here2')



            // await axios.patch(`/api/v1/accounts/add/`,addAmountToMgr)
            // await axios.patch(`/api/v1/accounts/add/`,creditAmount)
            await axios.patch(`/api/v1/accounts/add/`, debitedAccount)

            const bookHotel = {
                "user_id": user?.user_id,
                "hotel_id": hotelDetails?.hotel_id,
                "no_of_rooms":noOfRooms,
                "no_of_days":noOfDays,
                "amount": totalPrice,
                "status": "pending"
            }

            await axios.post(`/api/v1/bookings/`, bookHotel)



            props.toastMsg(toast.success, '🦄Booking Completed We will send you an email once booking is approved', 5000)


        } catch (error) {
            console.log(error.response)
            props.toastMsg(toast.error, '🦄Server Error')
        }

        handleModal()


    }


    const handleRatingModal = () => {

        if (openRatingModal) {
            setOpenRatingModal(false)

            return

        }


        setOpenRatingModal(true)




    }

    const handleRating = async (value) => {

        const ratingObj = {
            "user_id": user.user_id,
            "hotel_id": hotelDetails.hotel_id,
            "rating": value
        }

        console.log(ratingObj)

        try {

            try {
                await axios.post(`/api/v1/rating`, ratingObj)

            } catch (error) {
                await axios.patch(`/api/v1/rating`, ratingObj)

            }

            await axios.patch('/api/v1/rating/update', ratingObj)

            props.toastMsg(toast.success, '🦄 your rating has been recorded', 1000)




        } catch (error) {
            console.log(error)
            props.toastMsg(toast.error, '🦄Server Error', 1000)


        }

        handleRatingModal()

    }




    const ratingStars = []
    for (let i = 0; i < hotelDetails?.rating; i++) { ratingStars.push(i) }
    return (
        <>
            <div className=' bg-slate-700 mx-2 py-4 text-white'>

                <div className='grid grid-cols-2 max-md:grid-cols-1 justify-center items-center px-2'>
                    <div className='flex justify-center'>
                        <img className='h-52' src={hotelDetails?.img} alt="Hotel image" />

                    </div>

                    <div>

                        <div className='flex flex-col pt-5 items-center '>

                            <span>
                                <span>Rating :- </span>

                                {
                                    ratingStars.map((r) => {
                                        return (  <i key={r} className="fa-solid fa-star"></i>)
                                    })

                                }

                                <span className=' bg-blue-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded ml-3'>
                                    {hotelDetails?.rating}
                                </span>
                            </span>
                            <span className='text-xl uppercase underline'>
                                {hotelDetails?.hotel_name}
                            </span>

                        </div>

                        <div className='flex flex-col  items-center'>
                            <span> Price :- <span>{hotelDetails?.price} Rs.</span> </span>
                            <span> Location :- <span> {hotelDetails?.location} </span> </span>

                        </div>

                        {/* rate the hotel */}

                        {
                            user?.role_name !== 'manager' &&
                            <div className='text-center my-2'>
                                <button
                                    className='bg-black p-3 rounded-md
                            cursor-pointer
                            hover:text-black hover:bg-white
                            ' onClick={handleRatingModal}
                                >Rate this hotel</button>

                            </div>
                        }



                    </div>
                </div>

                <div className='px-5 text-center'>
                    <p>
                        {hotelDetails?.description}
                    </p>

                </div>












                {/* book hotel */}
                {
                    isUser &&
                    <div className='flex flex-col items-center justify-center'>

                        <div>
                            <input type="number" name="rooms" id=""
                                className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600'

                                placeholder='No. of Rooms' value={noOfRooms} onChange={bChange}
                            />
                        </div>
                        <div>
                            <input type="number" name="days" id=""
                                className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600'


                                placeholder='No. of Days'

                                value={noOfDays} onChange={bChange}
                            />
                        </div>
                        <div className='mt-1'>
                            <span>
                                Total Price :- <span>{totalPrice}</span>

                            </span>
                        </div>

                        <div className='mt-2'>
                            <button
                                className='bg-black p-3 rounded-md
                            cursor-pointer
                            hover:text-black hover:bg-white
                            ' onClick={handleModal}
                            >Book Hotel</button>
                        </div>


                    </div>
                }

            </div>



            {/* comment section */}
            <Comments hotelDetails={hotelDetails} user={user} toastMsg={(f, m, t) => props.toastMsg(f, m, t)}
            />


            {/* modal */}
            <UpiPinModal open={openModal} handleModal={handleModal} toastMsg={props.toastMsg} handleBank={handleBank}
                userDetails={user}

            />
            <RatingModal open={openRatingModal} handleModal={handleRatingModal} toastMsg={props.toastMsg} handleRating={handleRating}
                userDetails={user}

            />









        </>
    )
}

export default HotelDetails
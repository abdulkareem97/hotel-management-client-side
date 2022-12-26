import React, { useEffect } from 'react'
import { useState } from 'react';
import useCheckIsLogin from '../auth/useCheckIsLogin';
import axios from 'axios'
import { toast } from 'react-toastify';



const BookingHistory = (props) => {


    const user = useCheckIsLogin()
    const [bookings, setBookings] = useState([])
    const [reload, onReload] = useState(false)

    useEffect(() => {
        async function getPendingBookings() {
            try {
                const res = await axios.get(`/api/v1/bookings/${user?.user_id}`)
                setBookings(res.data)

            } catch (e) {
                // console.log('here')

            }
        }
        getPendingBookings()

    }, [reload])


    const onAccept = async (data) => {
        const status = "accepted"
        const BookingData = {
            b_id: data.b_id,
            status

        }
        const historyData = {
            from_id: data.user_id,
            too_id: data.mgr_id,
            amount: data.amount
        }

        const addAmountToMgr = {
            user_id : data.mgr_id,
            amount : data.amount
        }

        // console.log(data)
        try {
            await axios.patch('/api/v1/bookings', BookingData)

            await axios.post('/api/v1/history',historyData)
            
            await axios.patch(`/api/v1/accounts/add/`,addAmountToMgr)

            props.toastMsg(toast.success, '🦄 Booking Accepted!!', 1000)

        } catch (error) {
            console.log(error.response)
            props.toastMsg(toast.error, '🦄 Server Error!!', 1000)


        }

        onReload((r) => !r)




    }
    const onCancel = async (data) => {
        const status = "rejected"

        const BookingData = {
            b_id: data.b_id,
            status

        }

        console.log(data)
        try {
            await axios.patch('/api/v1/bookings', BookingData)
            props.toastMsg(toast.success, '🦄 Booking Rejected!!', 1000)

        } catch (error) {
            console.log(error.response)
            props.toastMsg(toast.error, '🦄 Server Error!!', 1000)


        }

        onReload((r) => !r)

    }

    return (
        <div>

            <div className='text-2xl flex justify-center underline mb-3'>
                <h4>Bookings Pending</h4>
            </div>





            {/* table */}

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-3 rounded-md">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                sl. no
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Amount
                            </th>


                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings.length != 0 ? bookings.map((b, ind) => {
                                return (
                                    <tr key={b.b_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-4 px-6">
                                            {ind + 1}
                                        </td>
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {b.email}
                                        </th>


                                        <td className="py-4 px-6">
                                            {b.amount}
                                        </td>
                                        <td className="py-4 px-6 text-right flex justify-center">
                                            <button onClick={() => onAccept(b)} className="font-medium bg-green-600 p-3 rounded-lg text-white mr-3 hover:text-green-600 hover:bg-white">Accept</button>
                                            <button onClick={() => onCancel(b)} className="font-medium bg-red-600 p-3 rounded-lg text-white mr-3 hover:text-red-600 hover:bg-white">Decline</button>

                                        </td>
                                    </tr>
                                )

                            }) : <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="py-4 px-6">


                                </td>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    No Bookings Pending Avaialable

                                </th>


                                <td className="py-4 px-6">

                                </td>
                                <td>

                                </td>
                            </tr>



                        }


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default BookingHistory

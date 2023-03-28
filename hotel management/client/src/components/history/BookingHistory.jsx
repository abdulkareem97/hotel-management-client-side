import React, { useEffect } from 'react'
import { useState } from 'react';
import useCheckIsLogin from '../auth/useCheckIsLogin';
import axios from 'axios'
import { toast } from 'react-toastify';
import BookingModal from '../Modal/BookingModal';
import * as Xlsx from "sheetjs-style";
import emailjs from '@emailjs/browser';




const BookingHistory = (props) => {


    const user = useCheckIsLogin()
    const [bookings, setBookings] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [reload, onReload] = useState(false)

    useEffect(() => {
        // console.log('booking')

        async function getPendingBookings() {
            try {
                const res = await axios.get(`/api/v1/bookings/${user?.user_id}`)
                setBookings(res.data)

            } catch (e) {
                // console.log('here')

            }
        }
        getPendingBookings()

        // })
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
            user_id: data.mgr_id,
            amount: data.amount
        }

        // console.log(data)
        try {


            props.toastMsg(toast.success, `🦄${data.amount} credited to your account`, 1000)

            await axios.patch('/api/v1/bookings', BookingData)

            await axios.post('/api/v1/history', historyData)

            await axios.patch(`/api/v1/accounts/add/`, addAmountToMgr)


            var templateParams = {
                hotel_name: data.hotel_name,
                reply_to: data.email,
                to_name : data.name ,
                rooms : data.no_of_rooms,
                days : data.no_of_days,
                coast : data.amount,
            };
             
            
            
            
            props.toastMsg(toast.success, '🦄 Booking Accepted!!', 1000)
            await emailjs.send('service_kqcn8hp', 'template_yot5gra', templateParams,'bKUSC9DrZNFm5CEGO')

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


        const returnAmounToUser = {
            user_id: data.user_id,
            amount: data.amount
        }

        // const historyData = {
        //     from_id: data.mgr_id,
        //     too_id: data.user_id,
        //     amount: data.amount
        // }

        console.log(data)
        try {
            await axios.patch('/api/v1/bookings', BookingData)
            await axios.patch(`/api/v1/accounts/add/`, returnAmounToUser)
            // await axios.post('/api/v1/history',historyData)


            props.toastMsg(toast.success, '🦄 Booking Rejected!!', 1000)

        } catch (error) {
            console.log(error.response)
            props.toastMsg(toast.error, '🦄 Server Error!!', 1000)


        }

        onReload((r) => !r)

    }



    const handleModal = () => {
        if (openModal) {
            setOpenModal(false)
            // setNoOFDays('')
            // setNoOfRooms('')
            return

        }

        // if (totalPrice !== 0) {
        setOpenModal(true)
        // }
        // else {
        // props.toastMsg(toast.error, '🦄Fill the details!!!...', 1000)


        // }

    }

    const downloadExcel = async (data) => {

        data['hotel_id'] = bookings[0].hotel_id
        console.log(data)
        try {

            props.toastMsg(toast.success, '🦄 Preparing file to download', 500)

            const fileData = await axios.post(`/api/v1/bookings/excel`, data)

            // const ws = Xlsx.utils.json_to_sheet(
            //     fileData
            // );
            // const wb = Xlsx.utils.book_new();

            console.log(fileData.data)



            const ws = Xlsx.utils.json_to_sheet(
                fileData.data
                
              );
              const wb = Xlsx.utils.book_new();
              await Xlsx.utils.book_append_sheet(wb, ws, "s1");
            //   const download = () => {
                Xlsx.writeFile(
                  wb,
                  "BookingHistory.xlsx"
                );
            //   };

            props.toastMsg(toast.success, '🦄 File started downloading', 500)

        } catch (error) {
            props.toastMsg(toast.success, '🦄 Server Error Try Again after some time ', 500)

            // console.log(error)

        }

    }

    return (
        <div>

            {/*  */}

            <div className='flex justify-end'>
                <button onClick={handleModal} className="bg-black text-white mr-3 p-2 rounded-md hover:text-black hover:bg-white">Download exel</button>
            </div>

            <div className='text-2xl flex justify-center underline mb-3'>
                <h4>Bookings Pending</h4>
            </div>





            {/* table */}

            <div className="overflow-x-auto shadow-md sm:rounded-lg mx-3 rounded-md">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                sl. no
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Rooms
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Days
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
                            bookings.length != 0 ? bookings.reverse().map((b, ind) => {
                                return (
                                    <tr key={b.b_id} className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                                        <td className="py-4 px-6">
                                            {ind + 1}
                                        </td>
                                        <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-white">
                                            {b.email}
                                        </th>


                                        <td className="py-4 px-6">
                                            {b.no_of_rooms}
                                        </td>
                                        <td className="py-4 px-6">
                                            {b.no_of_days}
                                        </td>
                                        <td className="py-4 px-6">
                                            {b.amount}
                                        </td>
                                        <td className="py-4 px-6 text-right flex justify-center">
                                            <button onClick={() => onAccept(b)} className="font-medium bg-green-600 p-3 rounded-lg text-white mr-3 hover:text-green-600 hover:bg-white">Accept</button>
                                            <button onClick={() => onCancel(b)} className="font-medium bg-red-600 p-3 rounded-lg text-white mr-3 hover:text-red-600 hover:bg-white">Decline</button>

                                        </td>
                                    </tr>
                                )

                            }) : <tr className=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                <td className="py-4 px-6">


                                </td>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                                    No Bookings Pending Avaialable

                                </th>
                                <td className="py-4 px-6"></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>



                        }


                    </tbody>
                </table>
            </div>



            <BookingModal open={openModal} handleModal={handleModal} toastMsg={props?.toastMsg} downloadExcel={downloadExcel}

            />









        </div>
    )
}

export default BookingHistory

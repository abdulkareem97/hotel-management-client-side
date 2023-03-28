import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



const Comments = (props) => {
    const [comments, setComments] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        async function getComments() {
            // console.log('comments')
            try {
                const res = await axios.get(`/api/v1/comment/${props.hotelDetails?.hotel_id}`)
                setComments(res.data)

            } catch (e) {

                // console.log('here')

            }
        }
        getComments()
    })


    const onChangeMsg = (e) => {
        // console.log(e.target.value.trim())
        setMsg(e.target.value)
    }

    const addComment = async (e) => {
        e.preventDefault()
        // console.log('here',msg)

        if(msg=="")
        {

            props.toastMsg(toast.error,'🦄Cant Send Empty Review',1000)


            return

        }
        try {

            const cmsg = msg.trim()

            const commentObj = {
                "user_id": props.user?.user_id,
                "hotel_id": props.hotelDetails?.hotel_id,
                "msg": cmsg
            }
            await axios.post(`/api/v1/comment`, commentObj)
            props.toastMsg(toast.success,'🦄 comment submited',1000)


        } catch (error) {
            props.toastMsg(toast.error,'🦄Server Error',1000)


        }
        setMsg('')


    }


    return (
        <div>

            {/* Add comment box */}
            <div className='mt-3'>

                {/* title  */}
                <div className=' mx-3'>
                    <form action="" method="post">
                        <textarea name="msg" id="" cols="30" rows="4"
                            className='border border-black w-full p-3'
                        placeholder={props.user?.user_id == props.hotelDetails?.mgr_id ? 'reply for the customers' : 'Give hotel review'}
                            value={msg}
                            onChange={onChangeMsg}

                        ></textarea>

                        <div className='flex justify-center'>

                            <button type="submit" className='bg-black p-3 rounded-full text-white
                            cursor-pointer px-7
                            hover:text-black hover:bg-white'
                                onClick={addComment}

                            >Send</button>
                        </div>
                    </form>

                </div>

            </div>

            {/* show comments */}

            <div className=''>
                <div className='flex justify-center my-3 text-xl underline'>
                    <span>Reviews Of the hotel</span>
                </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mx-3 rounded-md">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    From
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Comment/Reply
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Time
                                </th>


                                {/* <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Action</span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>


                            {
                                comments?.length != 0 ? comments.map((com, ind) => {
                                    return (
                                    <tr key={com.cid} className={` border-b  border-gray-700 

                                    ${com.user_id==props.hotelDetails?.mgr_id ? ' bg-green-800 hover:bg-green-600' :  'bg-gray-800 hover:bg-gray-600' }
                                    
                                    `}>
                                            <td className="py-4 px-6">
                                                {com.email}
                                            </td>
                                            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-white">
                                                {com.msg}
                                            </th>


                                            <td className="py-4 px-6">
                                                {com.time}
                                            </td>

                                        </tr>
                                    )

                                }) : <tr className=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                                    <td className="py-4 px-6">


                                    </td>
                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                                        No reviews yet be the first to give review

                                    </th>


                                    <td className="py-4 px-6">

                                    </td>

                                </tr>



                            }


                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Comments

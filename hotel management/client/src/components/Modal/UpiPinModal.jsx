import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


const UpiPinModal = (props) => {
    const [open,setOpen] = useState(true)
    const [upiPin,setUpiPin] = useState()
    useEffect(()=>{
        setOpen(props.open)
        setUpiPin('')
        // console.log('hello')

    },[props.open])

    



    const handleBank = async () =>{
        if(upiPin.toString().length!==4)
        {
            props.toastMsg(toast.error,'🦄 Invalid UPI PIN',1000)
            return
        }
        try {
            // console.log(props.userDetails.user_id)
            const res = await axios.get(`/api/v1/accounts/get/${props.userDetails?.user_id}`)
            // console.log(res.data[0].upi_pin,upiPin,upiPin!==res.data[0].upi_pin)

            if(upiPin!=res.data[0].upi_pin)
            {
                props.toastMsg(toast.error,'🦄 Invalid UPI PIN',1000)
                props.handleModal()
                return
            }

            // console.log(res.data[0])
            props.handleBank(res.data[0])
            
            

            // setMyAccount(res.data[0])

        } catch (e) {
            // console.log('You dont have an account', e)
            props.toastMsg(toast.error,'🦄 You dont have an account',1000)

            

        }
        
    }


    return (
        <div>
            <div className={`fixed  overflow-hidden text-white
            rounded-md
            top-1/3 w-52 left-[calc(50%-7rem)]
            flex flex-col ${open?'':'hidden'}

            
            `}>
                <div className='bg-black flex justify-end pr-3 py-1'>
                    <button onClick={()=>props.handleModal()}>
                        <i class="fa-solid fa-circle-xmark hover:text-red-600"></i>
                    </button>
                </div>
                <div className='bg-slate-800 p-4'>
                    <div>
                        Enter 4-DIGIT UPI PIN
                    </div>
                    <div>
                        <input type="number" name="days" id=""
                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600 w-full'


                            placeholder='UPI PIN'

                            value={upiPin} onChange={(e)=>setUpiPin(e.target.value)}
                        />

                    </div>
                    <div className='text-xs text-center'>
                        UPI PIN will keep your account secure from unauthorized access
                    </div>
                </div>
                <div className='bg-black flex justify-around py-3'>

                    <button onClick={handleBank}>
                        <i class="fa-sharp fa-solid fa-circle-check  hover:text-green-700"></i>
                    </button>


                </div>


            </div>

        </div>
    )
}

export default UpiPinModal

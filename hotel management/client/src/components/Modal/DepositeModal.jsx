import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


const DepositeModal = (props) => {

    const [amt,setAmt] = useState()
    useEffect(() => {
        
        setAmt('')
        // console.log('hello')

    }, [props.open])

    const handleDeposit = () =>{

        if(amt<500)
        {
            props.toastMsg(toast.error, '🦄 Minimum amount to deposite is 500', 1000)
            props.handleModal()
            return

        }
        else if(amt>5000){

            props.toastMsg(toast.error, '🦄 Maximum amount to deposite is 5000', 1000)
            props.handleModal()
            return

        }

        props.handleDeposit(amt)

    }
    return (
        <div>
            <div className={`fixed  overflow-hidden text-white
            rounded-md
            top-1/3 w-64 left-[calc(50%-8rem)]
            flex flex-col ${props.open ? '' : 'hidden'}

            
            `}>
                <div className='bg-black flex justify-end pr-3 py-1'>
                    <button onClick={() => props.handleModal()}>
                        <i class="fa-solid fa-circle-xmark hover:text-red-600"></i>
                    </button>
                </div>
                <div className='bg-slate-800 p-4'>
                    <div>
                        Enter Amount
                    </div>
                    <div>
                        <input type="number" name="days" id=""
                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600 w-full'


                            placeholder='Deposite Amount'

                            onChange={(e) => setAmt(e.target.value)}
                        />

                    </div>
                    <div className='text-xs text-center'>
                        UPI PIN will keep your account secure from unauthorized access
                    </div>
                </div>
                <div className='bg-black flex justify-around py-3'>

                    <button onClick={handleDeposit}>
                        <i class="fa-sharp fa-solid fa-circle-check  hover:text-green-700"></i>
                    </button>


                </div>


            </div>

        </div>
    )
}

export default DepositeModal

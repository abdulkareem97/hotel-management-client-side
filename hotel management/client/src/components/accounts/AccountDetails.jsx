
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useCheckIsLogin from '../auth/useCheckIsLogin'

import React,{useState} from 'react'
import copy from "copy-to-clipboard";  
import { toast } from 'react-toastify'



const AccountDetails = (props) => {
    const location = useLocation()
    const user = useCheckIsLogin()

    const { myAccount } = location.state
    useEffect(() => {

    }, [])


    const copyToClipboard = () => {
        copy(myAccount?.referal_code);
        // alert(`You have copied "${copyText}"`);
        props.toastMsg(toast.success,'🦄 Copied To Clickboard',500)
     }


    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center justify-center p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-lg
            max-w-min max-md:w-full max-md:mx-3 max-md:overflow-auto
            '>
                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                    <div class="w-full px-8 absolute top-8">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light">
                                    Name
                                </p>
                                <p class="font-medium tracking-widest">
                                    {user?.name}
                                </p>
                            </div>
                            <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                        </div>
                        <div class="pt-1">
                            <p class="font-light">
                                Card Number
                            </p>
                            <p class="font-medium tracking-more-wider">
                                {myAccount?.card_no}
                            </p>
                        </div>
                        <div class="pt-6 pr-6">
                            <div class="flex justify-between">
                                <div class="">
                                    <p class="font-light text-xs">
                                        Valid
                                    </p>
                                    <p class="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                                </div>
                                <div class="">
                                    <p class="font-light text-xs">
                                        Expiry
                                    </p>
                                    <p class="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                                </div>

                                <div class="">
                                    <p class="font-light text-xs">
                                        CVV
                                    </p>
                                    <p class="font-bold tracking-more-wider text-sm">
                                        ···
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='text-white mt-3'>
                    <span>Bank Balance : <span className='font-bold underline'>{myAccount.amount} Rs</span> </span>
                </div>

                <div className='text-white'>
                    <span className='mr-3'>
                        Referal code : <span>{myAccount.referal_code}</span>
                    </span>
                    <button onClick={copyToClipboard}>
                        <i class="fa-solid fa-copy text-xl"></i>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default AccountDetails

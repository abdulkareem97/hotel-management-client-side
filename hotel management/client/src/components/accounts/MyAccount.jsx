import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AddAccount from './AddAccount';
import { Routes, Route, useNavigate } from "react-router-dom"
import useCheckIsLogin from '../auth/useCheckIsLogin'





const MyAccount = (props) => {

    const navigate = useNavigate();
    // const [user, setUser] = useState()
    const user = useCheckIsLogin()

    const [myAccount, setMyAccount] = useState()






    useEffect(() => {

        async function getAccountDetails() {

            try {
                // console.log(user)
                const res = await axios.get(`/api/v1/Accounts/get/${user?.user_id}`)
                console.log(res.data[0])
                setMyAccount(res.data[0])

            } catch (e) {
                console.log('Account Not Found', e)

            }

        }
        getAccountDetails()
    }, [])

    const addAccount = (data) => {
        props.toastMsg(toast.success, '🦄 Account Has Been created successfully!!', 1500)

        setMyAccount(data)


    }

    return (
        <>
            <div>
                {
                    !myAccount && 
                    <div className='bg-slate-700 mx-4 p-3 rounded-xl text-white text-center'>
                        {/* <Link className='hover:text-slate-400'
                to={'/myHotel/add'}
                > Add You Hotel Details </Link> */}
                        <AddAccount toastMsg={props.toastMsg} user={user} addAccount={(data) => addAccount(data)} />
                    </div>
                }

            </div>

            {myAccount &&
                <div>
                    <ToastContainer />
                    <div class="p-8 relative">
                        <div class="rounded-2xl overflow-hidden shadow-lg">
                            <div
                                class="flex justify-center p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            >
                                <div
                                    class="w-64 h-40 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg"
                                >
                                    <div class="flex justify-between m-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="34"
                                            height="34"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="3" y="5" width="18" height="14" rx="3" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                            <line x1="7" y1="15" x2="7.01" y2="15" />
                                            <line x1="11" y1="15" x2="13" y2="15" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="34"
                                            height="34"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                                            <circle cx="14.5" cy="14.5" r="5.5" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-center mt-4">
                                        <h1 class="text-gray-400 font-thin font-os">
                                            XXXX XXXX XXXX 1234
                                        </h1>
                                    </div>
                                    <div
                                        class="flex flex-col justfiy-end mt-4 p-4 text-gray-400 font-quick"
                                    >
                                        <p class="font-bold text-xs">12 / 17</p>
                                        <h4 class="uppercase tracking-wider font-semibold text-xs">
                                            {user?.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-8 mb-2 font-quick">
                                <h1 class="font-black text-gray-700 tracking-wide text-xl">
                                    Get Your Bank Details
                                </h1>
                                <p class="font-bold text-gray-500">Ak -ideal Bank</p>
                            </div>
                            <div class="p-8 flex justify-center relative">
                                <button
                                    class="absolute p-3 rounded-full bottom-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-10 h-10"
                                        viewBox="0 0 24 24"
                                        stroke-width="1"
                                        stroke="#ffffff"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>}
        </>
    )
}

export default MyAccount

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const LogIn = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email, password)

        if(!email)
        {
            
            props.toastMsg(toast.error,'🦄 Email Must Not Be Empty!',1000)
            return

        }
        if(!password)
        {
            
            props.toastMsg(toast.error,'🦄 Password Must Not Be Empty!',1000)

            return

        }


        const user = { email, password }


        try {
            const res = await axios.post('/api/v1/users', user)
            // console.log(res.data)

            props.onSave(res.data)

        } catch (e) {
            // console.log(e.response.data.msg)
            console.log(e)
            
            props.toastMsg(toast.error,'🦄 Invalid Email or Password!',1000)
            //   alert(e)
        }
    }
    return (
        <div className=''>
            <div className="grid place-items-center">
                <ToastContainer />
                {/* user login */}
                <div className='bg-slate-700 mx-3 rounded-md p-6 text-white max-w-md'>
                    <div className='flex justify-center text-xl underline uppercase'>
                        <span>Log In</span>
                    </div>
                    <div className=''>
                        <form action="" method="post" onSubmit={handleSubmit} >
                            <div className='flex flex-col space-y-4 pt-4'>


                                <div className=''>

                                    {/* <label htmlFor="email">Email </label> */}
                                    <input
                                        className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                        hover:bg-slate-600
                                        '
                                        placeholder='Enter Your Email'
                                        type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="">
                                    {/* <label htmlFor="password">Password :- </label> */}
                                    <input
                                          className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                          hover:bg-slate-600
                                          '
                                          placeholder='Enter Your Password'
                                    type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className='flex justify-center'>
                                    <button type="submit" className='bg-black py-3 px-6 rounded-full hover:bg-white hover:text-black'>Login</button>

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

export default LogIn

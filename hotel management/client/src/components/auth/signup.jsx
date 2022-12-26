import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const SignUp = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCPassword] = useState()
    const [name, setName] = useState()
    const [mgr,setMgr] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password || !cpassword || !name) {

            props.toastMsg(toast.error, '🦄 Fill all the details')
            return
        }
        if(password!==cpassword)
        {
            props.toastMsg(toast.error, '🦄 confirm password doesnt match')
            return

        }
        
        const user = {
            "name":name,
            "email":email,
            "password":password,
            "role":mgr?"2":"1"
        }

        try {
            const res = await axios.post('/api/v1/users/signup', user)

            const getUser = {
                email,
                password

            }

            const userData = await axios.post('/api/v1/users', getUser)




            // console.log(res.data)

            props.onSave(userData.data)

        } catch (e) {
            console.log(e.response.data.msg)
           
            props.toastMsg(toast.error,'🦄 An account is already registered Please Login',2000)
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
                        <span>Sign Up</span>
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
                                        placeholder='Enter Your Name'
                                        type="text" name="email" id="email" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
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
                                <div className="">
                                    {/* <label htmlFor="password">Password :- </label> */}
                                    <input
                                        className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                  hover:bg-slate-600
                                  '
                                        placeholder='Confirm Your Password'
                                        type="password" name="password" id="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
                                </div>
                                <div className="flex">
                                    {/* <label htmlFor="password">Password :- </label> */}
                                   <input type="checkbox" name="" id="mgr" 
                                   checked={mgr}
                                   onChange={()=>{setMgr(!mgr)}}
                                   
                                   />

                                   <label htmlFor="mgr">
                                   <div className='flex flex-col text-center'>

                                   <span className='pl-2 '>Check this box</span>
                                   <span>if you want add you hotel details</span> 
                                   </div>
                                   </label>
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

export default SignUp

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Logout = (props) => {
    const logout =  () => {
      
        props.onLogout()
    }
    return (
        <div className='grid justify-center'>
            <div className="grid max-w-md justify-center bg-slate-700  rounded-xl p-5 text-white
      ">
        
                

                <div className="max-w-md">
                    <span>Click the below button to log out</span>

                </div>
                <div className="flex justify-center pt-4">
                    <button className='bg-black py-3 px-6 rounded-full hover:bg-white hover:text-black' onClick={logout}>LogOut?</button>
                </div>
            </div>
        </div>
    )
}

export default Logout

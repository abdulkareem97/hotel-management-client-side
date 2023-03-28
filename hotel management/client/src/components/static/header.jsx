// import { Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import akLogo from '../../img/hotel.jpeg'

const Header = (props) => {
    let Links = [
        { name: "HOME", link: "/", show: true },

        { name: "ABOUT US", link: "/about", show: true },
        // { name: "CONTACT", link: "/contact", show: props.userDetails ? true : false},
        // { name: "MY HOTEL", link: "/myHotel", show: ((props.userDetails ? true : false) && props.userDetails.role == 2 )},
        { name: "MY HOTEL", link: "/myHotel", show: ((props.user ? true : false) && props.user.role_name == 'manager' ) },
        { name: "BOOKINGS ", link: "/bookings", show: ((props.user ? true : false) && props.user.role_name == 'manager' ) },
        { name: "HOTELS", link: "/hotels",show: ((props.user ? true : false) && props.user.role_name == 'user' ) },
        { name: "ACCOUNT", link: "/account", show: props.user ? true : false },
        { name: "HISTORY", link: "/history", show: props.user ? true : false },
        { name: "LOG IN", link: "/login", show: props.user ? false : true },
        { name: "SIGN UP", link: "/signup", show: props.user ? false : true },
        { name: "LOG OUT", link: "/logout", show: props.user ? true : false },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full mb-9'>
            <div className='flex items-center justify-between bg-slate-700 text-white py-4 md:px-10 px-7'>
                <Link to={'/'} className=''>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800 self-center'>
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                            {/* <ion-icon name="logo-ionic"></ion-icon> */}
                            <img src={akLogo} alt="" srcSet="" className='h-10 rounded-full' />
                        </span>
                        <span className='relative top-1 text-white'>

                            Ak
                        </span>
                    </div>
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}
                    <i className={'fa-solid ' + (open ? 'fa-circle-xmark ' : 'fa-bars')}></i>
                </div>

                <ul className={`md:flex md:items-center absolute md:static bg-slate-500 md:bg-slate-700 text-white left-0 w-full md:w-auto  max-md:text-center transition-all duration-500 ease-in ${open ? 'top-20 ' : '-top-[630px]'}`}>
                    {
                        Links.map((link) => (

                            link.show &&
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-white  '>
                                <Link to={link.link} className=' hover:text-gray-100 active:bg-slate-800 duration-500 hover:bg-black p-2 rounded-lg' onClick={() => setOpen(!open)}>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Header

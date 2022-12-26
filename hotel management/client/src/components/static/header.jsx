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
        { name: "MY HOTEL", link: "/myHotel", show: true},
        { name: "BOOKINGS ", link: "/bookings", show: true},
        { name: "HOTELS", link: "/hotels", show: props.userDetails ? true : false},
        { name: "Account", link: "/account", show: props.userDetails ? true : false},
        { name: "LOG IN", link: "/login", show: props.userDetails ? false : true },
        { name: "SIGN UP", link: "/signup", show: props.userDetails ? false : true },
        { name: "LOG OUT", link: "/logout", show: props.userDetails ? true : false },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full  top-0 left-0 mb-9'>
            <div className='md:flex items-center sticky justify-between bg-slate-700 text-white py-4 md:px-10 px-7'>
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

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-500 md:bg-slate-700 text-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (

                            link.show &&
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 text-white'>
                                <Link to={link.link} className=' hover:text-gray-400 duration-500 ' onClick={() => setOpen(!open)}>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Header

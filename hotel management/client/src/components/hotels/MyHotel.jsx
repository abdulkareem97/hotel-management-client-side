import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useCheckIsLogin from '../auth/useCheckIsLogin';
import AddHotel from './AddHotel';
import HotelDetails from './HotelDetails';



const MyHotel = (props) => {

    const [myHotel, setMyHotel] = useState()
    const user = useCheckIsLogin()
    // let user;

    // useEffect(()=>{
    //     user = useCheckIsLogin()
    // },[])



    useEffect(() => {

        async function getHotelDetails() {
            try {
                // console.log(user)
                // const res = await axios.get(`http://localhost:1000/api/v1/hotels/myhotel/${user?.user_id}`)
                const res = await axios.get(`/api/v1/hotels/myhotel/${user?.user_id}`)
                // console.log(res.data)
                setMyHotel(res.data)

            } catch (e) {
                // console.log('here')

            }

        }
        getHotelDetails()
    }, [])

    const addHotel = (data) => {
        setMyHotel(data)

    }

    return (
        <div>
            {
                !myHotel &&
                // <div className='bg-slate-700 mx-4 p-3 rounded-xl text-white text-center'>
                <div>
                    {/* <Link className='hover:text-slate-400'
                to={'/myHotel/add'}
                > Add You Hotel Details </Link> */}
                    <AddHotel toastMsg={props.toastMsg} user={user} addHotel={(data) => addHotel(data)} />
                </div>
            }
            {/* my hotel details */}

            <div className={`${!myHotel ? 'hidden' : ''}`}>

                <HotelDetails hotel={myHotel} toastMsg={props.toastMsg} />
            </div>

        </div>
    )
}

export default MyHotel

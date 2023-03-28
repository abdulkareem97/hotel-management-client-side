import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


const RatingModal = (props) => {
    const [amt,setAmt] = useState()


    const stars = [1,2,3,4,5]
    useEffect(() => {
        
        setAmt('')
        // console.log('hello')

    }, [props.open])


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
                Give Rating
            </div>
            <div className='flex justify-center text-3xl space-x-3 my-4'>
                {
                    stars.map((val,ind)=>{

                        return(
                        <button key={val} className='hover:text-orange-400'  onClick={()=>props.handleRating(val)}>
                            
                            <i  className="fa-solid fa-star"></i>
                        </button>)
                    })
                }
                

            </div>
            <div className='text-xs text-center'>
                Click on the no. of stars to give rating
            </div>
        </div>
        <div className='bg-black flex justify-around py-3'>

            {/* <button onClick={handleDeposit}>
                <i class="fa-sharp fa-solid fa-circle-check  hover:text-green-700"></i>
            </button> */}


        </div>


    </div>

</div>
  )
}

export default RatingModal

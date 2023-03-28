import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'


const BookingModal = (props) => {

    const [amt, setAmt] = useState()



    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

    const statusArr = ['pending', 'accepted', 'rejected']

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    useEffect(() => {

        setAmt('')
        // console.log('hello')

    }, [props.open])

    const handleFile = () => {


        const conditions = statusArr.filter((v, i) => checkedState[i])

        if(startDate===undefined || endDate==undefined)
        {
            props.toastMsg(toast.error, '🦄 Select starting and end date', 1000)
            return
        }
        if(conditions=="")
        {
            props.toastMsg(toast.error, '🦄 Select at least one status', 1000)
            return
        }
        
        // let cobj = "(" + conditions.toString() + ")"
        let cobj = "("
        for (let i = 0; i < conditions.length; i++) {
            cobj +=  `\"`+ conditions[i] + `\"`  ;
            if (i!= conditions.length -1) {
                cobj += ","
                
            }
            
        }

        cobj += ")"
        // console.log(conditions)
        // let cobj;



        const obj = {
            startDate:String(startDate),
            endDate:String(endDate),
            conditions:cobj

        }

        // console.log(obj)



        props.downloadExcel(obj)

    }

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);



        // setTotal(totalPrice);
    };
    return (
        <div>
            <div className={`fixed  overflow-hidden text-white
            rounded-md
            top-1/3 w-64 left-[calc(50%-11rem)] 
            flex flex-col ${props.open ? '' : 'hidden'}

            
            `}>
                <div className='bg-black flex justify-end pr-3 py-1'>
                    <button onClick={() => props.handleModal()}>
                        <i class="fa-solid fa-circle-xmark hover:text-red-600"></i>
                    </button>
                </div>
                <div className='bg-slate-800 p-4'>
                    <div>
                        Enter Details
                    </div>
                    <div>


                        <div>
                            <label htmlFor="sd">Start Date</label>


                            <input type="date" name="startDate" id="sd" className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600 w-full'

                                onChange={(e) => setStartDate(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="ed">End Date</label>
                            <input type="date" name="endDate" id="ed" className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                            hover:bg-slate-600 w-full' onChange={(e) => setEndDate(e.target.value)} />
                        </div>

                        <div className='flex flex-wrap space-x-3 mx-2 mt-1 justify-center'>

                            <div>
                                <input type="checkbox" name="status" id="p" onChange={() => handleOnChange(0)} />
                                <label htmlFor="p">Pending</label>
                            </div>
                            <div>
                                <input type="checkbox" name="status" id="a" onChange={() => handleOnChange(1)} />
                                <label htmlFor="a">Accepted</label>
                            </div>
                            <div>
                                <input type="checkbox" name="status" id="r" onChange={() => handleOnChange(2)} />
                                <label htmlFor="r">Rejected</label>
                            </div>

                        </div>

                     

                    </div>
                    <div className='text-xs text-center'>
                        {/* UPI PIN will keep your account secure from unauthorized access */}
                    </div>
                </div>
                <div className='bg-black flex justify-around py-3'>

                    <button onClick={handleFile}>
                        <i class="fa-sharp fa-solid fa-circle-check  hover:text-green-700"></i>
                    </button>


                </div>


            </div>

        </div>
    )
}

export default BookingModal

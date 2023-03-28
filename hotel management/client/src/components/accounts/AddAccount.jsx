import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const AddAccount = (props) => {


    const [hotel_name, sethotel_name] = useState()
    const [img, setimg] = useState()
    const [description, setdescription] = useState()
    const [price, setprice] = useState()
    const [location, setlocation] = useState()


    const [pin, setPin] = useState()
    const [cpin, setCpin] = useState()
    const [referalCode, setReferalCode] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!pin || !cpin) {

            props.toastMsg(toast.error, '🦄 Enter Your Pin and confirm pin')
            return
        }
        if (pin.length !== 4) {
            props.toastMsg(toast.error, '🦄 Enter 4 Digit Pin')
            return

        }
        if (pin !== cpin) {
            props.toastMsg(toast.error, '🦄 Pin and confirm pin must matchs')
            return

        }

        let amt = 0


        if (referalCode === "") {
            amt = 0

        }
        else {
            try {
                const ref_user = await axios.get(`/api/v1/accounts/referal/${referalCode}`)

                // console.log('here')
                console.log(ref_user)

                const addAmountToRefUSer = {
                    user_id: ref_user.data[0].user_id,
                    amount: 500
                }


                const historyData = {
                    from_id: 1,
                    too_id: ref_user.data[0].user_id,
                    amount: 500
                }


                const CreaterhistoryData = {
                    from_id: 1,
                    too_id: props.user?.user_id,
                    amount: 100
                }

                // console.log('here2')

                await axios.post('/api/v1/history', historyData)
                await axios.post('/api/v1/history', CreaterhistoryData)




                await axios.patch(`/api/v1/accounts/add/`, addAmountToRefUSer)
                // console.log('here3')

                props.toastMsg(toast.error, '🦄 100 credited to your account')





                amt = 100

            } catch (error) {
                console.log(error)

            }
        }

        var cn1 = Math.floor(1000 + Math.random() * 9000);
        var cn2 = Math.floor(1000 + Math.random() * 9000);
        var cn3 = Math.floor(1000 + Math.random() * 9000);
        var cn4 = Math.floor(1000 + Math.random() * 9000);

        const user_id = props.user.user_id
        const amount = amt
        const referal_code = props.user.user_id + "" + (Math.random() + 1).toString(36).substring(4)
        const upi_pin = pin
        const card_no = `${cn1} ${cn2} ${cn3} ${cn4}`

        // account/

        // {
        //     "user_id":1,
        //     "amount":5000,
        //     "referal_code":"adasds",
        //     "upi_pin":1234,
        //     "card_no":"1234 5678 1234 5678"
        // }

        const account = {
            user_id,
            amount,
            referal_code,
            upi_pin,
            card_no
        }




        // console.log(hotel)
        try {
            await axios.post('/api/v1/accounts/add', account)

            const res = await axios.get(`/api/v1/accounts/get/${props.user.user_id}`)

            props.addAccount(res.data)


            props.toastMsg(toast.error, '🦄 Account Created Successfully')






            // hotels/myhotel/8

            // props.onSave(user)

        } catch (e) {
            console.log(e.response.data.msg)

            props.toastMsg(toast.error, '🦄 Server Error Please Try Again', 2000)
            //   alert(e)
        }




    }



    return (
        <div className=''>
            <div className="grid place-items-center md:mx-7">
                <ToastContainer />
                {/* user login */}
                <div className='bg-slate-700 mx-3 rounded-md p-6 text-white w-full '>
                    <div className='flex justify-center text-xl underline uppercase'>
                        <span>Set UPI PIN</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <form action="" method="get" onSubmit={handleSubmit} >
                            <div className='flex flex-col space-y-4 pt-4'>

                                <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                                    <div class="w-full px-8 absolute top-8">
                                        <div class="flex justify-between">
                                            <div class="">
                                                <p class="font-light">
                                                    Name
                                                </p>
                                                <p class="font-medium tracking-widest">
                                                    {props.user?.name}
                                                </p>
                                            </div>
                                            <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                                        </div>
                                        <div class="pt-1">
                                            <p class="font-light">
                                                Card Number
                                            </p>
                                            <p class="font-medium tracking-more-wider">
                                                XXXX  XXXX  XXXX  XXXX
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
                                <div className='flex flex-col items-center space-y-3'>


                                    <div>
                                        <input type="text" name="" id=""
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                         hover:bg-slate-600
                                         '
                                            placeholder='Referal Code'
                                            value={referalCode} onChange={(e) => setReferalCode(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input type="number" name="" id=""
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                         hover:bg-slate-600
                                         '
                                            placeholder='Set Your Pin'
                                            value={pin} onChange={(e) => setPin(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input type="number" name="" id=""
                                            className='bg-slate-700 text-xl p-3 border-b-2 border-black focus:outline-none focus:bg-slate-600
                                         hover:bg-slate-600
                                         '
                                            placeholder='Confirm Your Pin'
                                            value={cpin} onChange={(e) => setCpin(e.target.value)} />
                                    </div>






                                    <div className='flex justify-center'>
                                        <button type="submit" className='bg-black py-3 px-6 rounded-full hover:bg-white hover:text-black'>Set Pin</button>

                                    </div>
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

export default AddAccount

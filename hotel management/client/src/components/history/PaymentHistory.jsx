import React, { useEffect } from 'react'
import { useState } from 'react';
import useCheckIsLogin from '../auth/useCheckIsLogin';
import axios from 'axios'
import { toast } from 'react-toastify';


const TransactionRow = ({ info, user, ind }) => {

  if (info.from_id == user.user_id) {
    return (
      <>
        <tr key={info.ph_id} className=" border-b bg-red-800 border-gray-700 hover:bg-red-600">
          <td className="py-4 px-6">
            {ind + 1}
          </td>
          <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-white">
            DEBITED
          </th>
          <td className="py-4 px-6">
            {info.to_email}
          </td>
          <td className="py-4 px-6">
            {info.amount}
          </td>

        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr key={info.ph_id} className=" border-b bg-green-800 border-gray-700 hover:bg-green-600">
          <td className="py-4 px-6">
            {ind + 1}
          </td>
          <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-white">
            CREDITED
          </th>
          <td className="py-4 px-6">
            {info.from_email}
          </td>
          <td className="py-4 px-6">
            {info.amount}
          </td>

        </tr>
      </>
    )

  }



}


const PaymentHistory = () => {

  const user = useCheckIsLogin()
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function getPaymentHistory() {
      try {
        const res = await axios.get(`/api/v1/history/${user?.user_id}`)
        const data =  [...res.data]
        setHistory([...data])
        // console.log(res.data)
        // console.log(user)

      } catch (e) {
        // console.log('here')

      }
    }
    getPaymentHistory()

  }, [])
  return (
    <div>
      <div className='text-2xl flex justify-center underline mb-3'>
        <h4>Payment History</h4>
      </div>




      {/* table */}

      <div className="overflow-x-auto  shadow-md sm:rounded-lg mx-3 rounded-md">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                sl. no
              </th>
              <th scope="col" className="py-3 px-6">
                Transaction
              </th>
              <th scope="col" className="py-3 px-6">
                From/To
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>


            {
              history.length != 0 ? history.map((his, ind) => {
                return (

                  <TransactionRow info={his} user={user} key={his.ph_id} ind={ind} />



                )

              }) : <tr className=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
                <td className="py-4 px-6">


                </td>
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  No Bookings Pending Avaialable

                </th>


                <td className="py-4 px-6">

                </td>
                <td>

                </td>
              </tr>



            }


          </tbody>
        </table>
      </div>


    </div>
  )
}






export default PaymentHistory

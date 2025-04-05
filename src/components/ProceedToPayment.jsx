import React from 'react'
import gpay from "../assets/gpay.png"
import phonepe from "../assets/phonepay.png"
import paytm from "../assets/paytm.png"
import Payment from './Payment'
import { useNavigate } from 'react-router-dom'
const ProceedToPayment = () => {
    const navigate=useNavigate();
  return (
    <div>
      <p className='font-bold'>Choose the payment option below</p>
      <div className='flex p-4 m-4'>
        <button onClick={()=>navigate("/payment")}><img src={gpay} alt="gpay_image" className='h-10 w-10 mx-4'/></button>
        <img src={phonepe} alt="gpay_image" className='h-10 w-10 mx-4'/>
        <img src={paytm} alt="gpay_image" className='h-10 w-10 mx-4'/>
      </div>
    </div>
  )
}

export default ProceedToPayment

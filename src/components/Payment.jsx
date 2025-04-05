import React from 'react'
import useOnlineStatus from '../utils/useOnlineStatus'
const Payment = () => {
  const onlineStatus=useOnlineStatus();
  return (
    <div>
        {onlineStatus ? (
        <div>
            <p className='font-bold'>Thankyou for payment!!!</p>
        </div> 
        ) :
        (
            <div className='font-bold'>Ohh..! Check your internet connection. Looks like you are offline</div>
        )
      }
    </div>
     
  )
}

export default Payment;

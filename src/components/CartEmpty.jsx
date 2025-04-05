import React from 'react'

const CartEmpty = () => {
  return (
    <div className='items-center'>
      <p className='font-bold text-lg'>Your Cart is Empty..</p>
      <p className='font-bold text-lg'>Add items to your cart to proceed with payment..</p>
    </div>
  )
}

export default CartEmpty

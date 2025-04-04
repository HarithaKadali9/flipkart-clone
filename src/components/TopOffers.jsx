import React, { useState } from 'react'
import itemsList from "../utils/items_list.json"
import { useDispatch } from "react-redux";
import { addItem} from "../redux/cartSlice";
import { useSelector } from 'react-redux';

const TopOffers = ({count}) => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div className='flex shadow-lg m-4 p-4'>
      <div className='text-bold text-2xl'>
        Top Offers
      </div>

      <div className='flex flex-wrap justify-between mt-4'>
        {itemsList.fashion.map((data)=>(
          <div key={data.id} className='shadow-2xs p-4 border border-white '> 
            <img src={data.image} className='h-40 w-40 rounded'/>
            <h1>{data.name}</h1>
            <h3 className='line-through'>Rs. {data.rupees}/-</h3>
            <h3 className='text-green-500 text-bold'>Offer: Rs. {data.offerPrice}/-</h3>
            <button className='border border-black px-2 mx-2 rounded-lg text-black hover:bg-green-500 hover:text-white' 
            onClick={() => dispatch(addItem({id:data.id, name:data.name, rupees: data.offerPrice, image:data.image}))}>
              Add cart
            </button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TopOffers

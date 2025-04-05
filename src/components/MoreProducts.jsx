import React, { useState } from 'react'
import itemsList from "../utils/items_list.json"
import { useNavigate } from 'react-router-dom';
const MoreProducts = () => {
  const navigate=useNavigate();
  const [hoverItemId, setHoverItemId]=useState(null);
  
  return (
    <div className='flex flex-wrap gap-4 shadow-lg m-4'>
      {itemsList.products.map((data)=>(
        <div className='flex'>
            <div key={data.id} 
            className=' relative rounded-2xl px-4 shadow-lg p-2 lg:mx-2'
            onMouseEnter={()=>setHoverItemId(data.id)}
            onMouseLeave={()=>setHoverItemId(null)}>
                    <img className='w-20 h-20 rounded-lg' src={data.image} alt={data.name}/>
                    <p className='text-xs font-semibold cursor-pointer' >
                      {data.name}<span className='hover:text-blue-800 text-md'>{hoverItemId=== data.id ? " ˅" : " ^"}</span>
                    </p>
                    {hoverItemId === data.id && (
                      <div className='p-2 text-xs rounded-md bg-white shadow-xl absolute z-10 mt-2 dark:text-black'>
                        <h1
                          className='hover:bg-blue-200 rounded-md py-2 cursor-pointer'
                          onClick={() => {
                            if (data.id === "42" && data.accordiana) {
                              navigate("/mobiles");
                            } else {
                              navigate("/topoffers");
                            }
                          }}
                        >
                          {data.accordiana}
                        </h1>
                        <h1 className='hover:bg-blue-200 py-2 rounded-md'>
                          {data.accordianb}
                        </h1>
                      </div>
                    )}            
                    </div>
        </div>
      ))}
    </div>
  )
}

export default MoreProducts

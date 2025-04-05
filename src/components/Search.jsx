import React, { useState } from 'react'
import List from "../utils/items_list.json"
import TopOffers from './TopOffers';
const Search = () => {
  const [listOfItems, setListOfItems]=useState(List.fashion);
  const [filterListOfItems, setFilterListOfItems]=useState(List.fashion);
  const [searchText, setSearchText]=useState("");

  return (
    <div>
      <div className=''>
        <input className='border border-black rounded' 
        value={searchText} 
        placeholder='🔍 Search for Products' 
        onChange={(e)=>setSearchText(e.target.value)}/>
        <button onClick={()=>{
          const filterItems=listOfItems.filter((item)=>{
            item.name.toLowerCase().includes(searchText.toLowerCase())
          });
          setFilterListOfItems(filterItems);
          console.log("search button clicked")
        }}>Search</button>
      </div>
      <div>
        {filterListOfItems.map((products)=>{
          <TopOffers key={products.id} data={products}/>
        })}
      </div>
    </div>
  )
}

export default Search;

import React, { useState } from 'react'
import List from "../utils/mockData.json"
const Search = () => {
  const [listOfItems, setListOfItems]=useState(List);
  const [filterListOfItems, setFilterListOfItems]=useState(List);
  const [searchText, setSearchText]=useState("");

  return (
    <div>
      <div className=''>
        <input className='border border-black rounded' value={searchText} placeholder='🔍 Search for Products' onChange={(e)=>setSearchText(e.target.value)}/>
      </div>
    </div>
  )
}

export default Search;

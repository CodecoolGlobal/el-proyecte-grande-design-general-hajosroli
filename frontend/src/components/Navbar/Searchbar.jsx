import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className='relative flex items-center w-full md:w-3/5'>
        <input className='p-2 w-full rounded-md text-black focus:outline-none' placeholder='Search...'/>
        <button className='absolute right-0 bg-purple-white text-black font-extrabold text-lg h-full rounded-r-md p-2'>
            <IoIosSearch />
        </button>
    </div>
  )
}

export default Searchbar
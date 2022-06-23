import React from 'react'
import './SearchLayout.css'
import { IoSearch } from 'react-icons/io5'

const SearchLayout = () => {
  return (
    <div className='search-layout'>
      <form action="/search/">
        <input type="text" placeholder='Type and hit enter...'/>
        <IoSearch/>
      </form>
    </div>
  )
}

export default SearchLayout
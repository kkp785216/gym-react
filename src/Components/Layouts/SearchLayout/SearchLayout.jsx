import React, {useState} from 'react'
import './SearchLayout.css'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const SearchLayout = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${searchText}`);
  }
  return (
    <div className='search-layout'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} placeholder='Type and hit enter...'/>
        <IoSearch/>
      </form>
    </div>
  )
}

export default SearchLayout
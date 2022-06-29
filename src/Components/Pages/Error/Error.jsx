import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Error.css'

const Error = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${searchText}`);
  }
  return (
    <div className='error'>
        <h1>404</h1>
        <div></div>
        <p></p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }}/>
        </form>
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default Error
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

const Header=({onSearch})=>{
const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e)=>{
    setSearchTerm(e.target.value)
    onSearch(e.target.value)

  }

 const handleSubmit= (e)=>{
   e.preventDefault()
//   onSearch(e.target.value)
 setSearchTerm("")
 }
  
 return(
   <header className="bg-light sticky-top">
   <div className='container d-flex justify-content-between pb-3'>
     <NavLink to="/" className="nav-link text-danger fs-1 fw-bold cursive-text">
       meetup
     </NavLink>
   <div className='search-container py-2'>
     <div className="search-input-container d-flex ">
        <form onSubmit={handleSubmit} className=" d-flex">
 
       {/* <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         fill="currentColor"
         className="bi bi-search search-icon pe-1"
         viewBox="0 0 16 16"
       >
         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
       </svg> */}
       <input
         placeholder=" search by title and tag..."
         className='search-input'
         value={searchTerm}
         onChange={handleSearch}
       />
        </form> 
     </div>
   </div>
   </div>
   </header>
 ) 
}
 export default Header
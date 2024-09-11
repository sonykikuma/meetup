import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Events from './components/Events'
import { useState } from 'react'

export default function App() {
const [searchTerm, setSearchTerm] = useState('')
  
  return (<div className='bg-light'>
    <Header onSearch= {setSearchTerm}/>
    <hr className=''/>
    <main className="">
      <Events searchTerm = {searchTerm}/>
    </main>
    </div>)
}

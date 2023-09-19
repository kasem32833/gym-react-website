import { useState } from 'react'
import './App.css'
// import Navbarda isy from './components/Navbar/Navbardaisy'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div className='container mx-auto'>
    <h1 className="text-3xl font-bold text-center bg-violet-500 rounded-t-lg text-white ">Gym Website</h1>
      {/* <Navbardaisy></Navbardaisy> */}

      
      
        <Navbar></Navbar>
    </div>
  )
}

export default App

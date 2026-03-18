import React from 'react'
import { Content } from './components/Content'
import { Route, Routes } from 'react-router-dom'
import { OpenMsg } from './components/OpenMsg'



function Dummy()  {
  return (
    <div className='bg-[#888] h-[90%] w-full '>
      <Routes>
        <Route path='/' element={<OpenMsg/>}></Route>
       <Route path='/jan' element={<Content/>}></Route>  
      </Routes>      
    </div>
  )
}

export default Dummy
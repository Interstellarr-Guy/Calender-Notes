import React from 'react'
import { Content } from './components/Content'
import { Route, Routes } from 'react-router-dom'
import { OpenMsg } from './components/OpenMsg'
import { Jan } from './components/Months/Jan'
import { Feb } from './components/Months/Feb'
import { Mar } from './components/Months/Mar'
import { Apr } from './components/Months/Apr'
import { May } from './components/Months/May'
import { Jun } from './components/Months/Jun'
import { Jul } from './components/Months/Jul'
import { Aug } from './components/Months/Aug'
import { Sep } from './components/Months/Sep'
import { Oct } from './components/Months/Oct'
import { Nov } from './components/Months/Nov'
import { Dec } from './components/Months/Dec'



function Dummy()  {
  return (
    <div className='bg-[#888] h-[90%] w-full '>
      <Routes>
        <Route path='/' element={<OpenMsg/>}></Route>
       
       <Route path='/jan' element={<Jan/>}></Route>
       <Route path='/feb' element={<Feb/>}></Route>
       <Route path='/mar' element={<Mar/>}></Route>
       <Route path='/apr' element={<Apr/>}></Route>
       <Route path='/may' element={<May/>}></Route>
       <Route path='/jun' element={<Jun/>}></Route>
       <Route path='/jul' element={<Jul/>}></Route>
       <Route path='/aug' element={<Aug/>}></Route>
       <Route path='/sep' element={<Sep/>}></Route>
       <Route path='/oct' element={<Oct/>}></Route>
       <Route path='/nov' element={<Nov/>}></Route>
       <Route path='/dec' element={<Dec/>}></Route>
       

      </Routes>      
    </div>
  )
}

export default Dummy
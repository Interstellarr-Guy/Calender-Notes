import { useState } from 'react'

import './App.css'
import Header from './Header';
import { Dates } from './Dates';


function App() {
  return (
    
    <div className='flex flex-col h-screen'>
     <Header/>
     <Dates/>
    
    </div>
    
    

  )
}
export default App;
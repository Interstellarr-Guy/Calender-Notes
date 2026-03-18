import { useState } from 'react'

import './App.css'
import Header from './Header';
import { Dates } from './Dates';
import ClickableHeading from './ClickableHeading';

function App() {
  return (
    
    <div className='flex flex-col h-screen'>
     <Header/>
     
    <Dates/>
    
    </div>
    
    

  )
}
export default App;
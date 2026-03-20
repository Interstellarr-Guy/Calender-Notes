import { Link } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

function Header() {
  return (
    <div className="navbar bg-[#121212] text-white p-4  font-bold">
         
         <div className=' flex flex-row justify-around'>
          <h1 className='head text-5xl'>2026</h1>
          <div className='monthsContainer'>
              <Link to="/jan" id='mon' className='set1'>Jan</Link>
              <Link to="/feb" id='mon' className='set1'>Feb</Link>
              <Link to="/mar" id='mon' className='set1'>Mar</Link>
              <Link to="/apr" id='mon' className='set1'>Apr</Link>
              <Link to="/may" id='mon' className='set1'>May</Link>
              <Link to="/jun" id='mon' className='set1'>Jun</Link>
              <Link to="/jul" id='mon' className='set2'>Jul</Link>
              <Link to="/aug" id='mon' className='set2'>Aug</Link>
              <Link to="/sep" id='mon' className='set2'>Sep</Link>
              <Link to="/oct" id='mon' className='set2'>Oct</Link>
              <Link to="/nov" id='mon' className='set2'>Nov</Link>
              <Link to="/dec" id='mon' className='set2'>Dec</Link>
          </div>
              

         </div>
         
    </div>
    
  )
}
export default Header;
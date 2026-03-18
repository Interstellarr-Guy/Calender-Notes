import { Link } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

function Header() {
  return (
    <div className="navbar bg-[#121212] text-white p-4  font-bold ">
         
         <div className='flex flex-row justify-around'>
          <h1 className='head text-5xl'>2026</h1>
              <Link to="/jan" id='mon'>Jan</Link>
              <Link to="/feb" id='mon'>Feb</Link>
              <Link to="/mar" id='mon'>Mar</Link>
              <Link to="/apr" id='mon'>Apr</Link>
              <Link to="/may" id='mon'>May</Link>
              <Link to="/jun" id='mon'>Jun</Link>
              <Link to="/jul" id='mon'>Jul</Link>
              <Link to="/aug" id='mon'>Aug</Link>
              <Link to="/sep" id='mon'>Sep</Link>
              <Link to="/oct" id='mon'>Oct</Link>
              <Link to="/nov" id='mon'>Nov</Link>
              <Link to="/dec" id='mon'>Dec</Link>

         </div>
         
    </div>
    
  )
}
export default Header;
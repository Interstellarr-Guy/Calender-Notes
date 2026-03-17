

import './App.css'

function Header() {
  return (
    <div className="navbar bg-[#121212] text-white p-4  font-bold ">
         
         <div className='flex flex-row justify-around'>
          <h1 className='head text-5xl'>2026</h1>
              <h4 id="mon">Jan</h4>
              <h4 id="mon">Feb</h4>
              <h4 id="mon">Mar</h4>
              <h4 id="mon">Apr</h4>
              <h4 id="mon">May</h4>
              <h4 id="mon">Jun</h4>
              <h4 id="mon">Jul</h4>
              <h4 id="mon"> Aug</h4>
              <h4 id="mon">Sep</h4>
              <h4 id="mon">Oct</h4>
              <h4 id="mon">Nov</h4>
              <h4 id="mon">Dec</h4>

         </div>
         
    </div>
    
  )
}
export default Header;
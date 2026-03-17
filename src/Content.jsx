import React from 'react'

export const Content = () => {
  return (
    <div className='bg-[#888] h-[90%] w-full grid grid-cols-[repeat(7,1fr)] grid-rows-[repeat(5,1fr)] border border-gray-500'>
        
        <div className='box border-gray-400'>
          <textarea placeholder='1 
        Type to start' id="con"></textarea></div>
        
          <div className='box border-gray-400'>
          <textarea placeholder='2' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='3' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='4' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='5' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='6' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='7' id="con"></textarea></div>  
          <div className='box border-gray-400'>
          <textarea placeholder='8' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='9' id="con"></textarea></div>
          <div className='box border-gray-400'>
          <textarea placeholder='10' id="con"></textarea></div>
        
        
    </div>
  )
}

//{[...Array(35)].map((_, i) => (
 //   <div key={i} className="border border-gray-300 flex items-center justify-center">
   //   {i + 1}
  //  </div>
 // ))}
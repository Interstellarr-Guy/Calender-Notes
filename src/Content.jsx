import React from 'react'

export const Content = () => {
  return (
    <div className='bg-[#888] flex-1 grid grid-cols-[repeat(7,1fr)] grid-rows-[repeat(5,1fr)]'>
        {[...Array(35)].map((_, i) => (
    <div key={i} className="border border-gray-300 flex items-center justify-center">
      {i + 1}
    </div>
  ))}
    </div>
  )
}

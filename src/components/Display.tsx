import React from 'react'

interface display{
  display:number|string
}

export default function Display({display}:display) {
  return (
    <div className='px-4 py-2 bg-white m-4 h-16 text-4xl rounded-xl text-gray-800 text-end'>
      {display}
      </div>
  )
}

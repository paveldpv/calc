import React from 'react'
import {Dispatch} from 'react'
import {propsPanel} from './../container/Panel'

interface buttonProps{
  button:number|string,
  setDisplay:any
}

export default function Button({button,setDisplay}:buttonProps) {

    const clickHeandler =()=>{
      setDisplay(button)
      
    }

    return (
    <button 
    onClick={clickHeandler}
    className='`button text-4xl font-bold p-4 bg-gray-700 text-white rounded-md shadow-lg hover:shadow-2xl hover:bg-gray-800 '>
      {button}
    </button>
  )
}

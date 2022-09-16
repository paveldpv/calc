import {Dispatch} from 'react'
import React from 'react'
import { buttons } from '../config/buttons'
import Button from '../components/Button'

interface propsPanel{
  setDisplay:Dispatch<React.SetStateAction<string>>
  displayValue:string
}

export default function Panel({setDisplay,displayValue}:propsPanel) {

  return (
    <div className='gap-4 grid grid-cols-3  p-4' >
      {
        buttons.map(but=><Button button={but} key={but} setDisplay={setDisplay} displayValue={displayValue} />)
      }
    </div>
  )
}

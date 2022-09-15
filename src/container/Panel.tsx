import {Dispatch} from 'react'
import React from 'react'
import { buttons } from '../config/buttons'
import Button from '../components/Button'

export interface propsPanel{
  setDisplay:Dispatch<number|string>
}

export default function Panel({setDisplay}:propsPanel) {

  return (
    <div className='gap-4 grid grid-cols-4 p-4' >
      {
        buttons.map(but=><Button button={but} key={but} setDisplay={setDisplay}/>)
      }
    </div>
  )
}

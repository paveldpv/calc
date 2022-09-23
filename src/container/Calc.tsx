import {Dispatch,useState} from 'react'
import Display from '../components/Display'
import Panel from './Panel'

export default function Calc() {

  const [display,setDispaly]=useState<string>(``)

  return (
    <div className='w-full bg-blue-400 h-screen py-10'>
      <div className=' w-1/2 min-w-full bg-red-400 mx-auto border-2 border-black border-solid rounded-md  '>
        <Display display={display}/>
        <Panel setDisplay={setDispaly} displayValue={display}/>
      </div>
    </div>
  )
}

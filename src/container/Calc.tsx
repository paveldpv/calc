import {Dispatch,useState} from 'react'
import Display from '../components/Display'
import Panel from './Panel'

export default function Calc() {

  const [display,setDispaly]=useState<number|string>(``)

  return (
    <div className='w-full bg-blue-400 h-screen py-10'>
      <div className=' w-1/2 bg-red-400 mx-auto border-2 border-black border-solid rounded-md '>
        <Display display={display}/>
        <Panel setDisplay={setDispaly}/>
      </div>
    </div>
  )
}

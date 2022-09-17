import React from 'react'
import {Dispatch} from 'react'
import axios from 'axios'

interface buttonProps{
  button:string,
  setDisplay:Dispatch<React.SetStateAction<string>>
  displayValue:string
}


const calc:((str:string)=>Promise<string>)=async(str)=>{
  let result:string=``
  const calc ={expr:str,precision:4}
  try{
    const {data}= await axios.post(`http://api.mathjs.org/v4/`,calc)   
    return data.result
  }
  catch{
    return result
  }
  
}

const validBrace:((str:string,char:string)=>boolean)=(str,char)=>{
  let result:boolean=false  
  const lastChar=str[str.length-1]
 
  switch (char) {
    case `)`:
      if(/[0-9]/.test(lastChar)&&str.includes(`(`)) result=true;  
      break;
   case `(`:
      if(str.length===0) result=true            
      if(!/[0-9]/.test(lastChar)) result=true;      
        break;
    default: if(/[0-9]/.test(lastChar)||lastChar===`)`||lastChar===`(`) result=true
      break;
  }
  return result
}



export default function Button({button,setDisplay,displayValue}:buttonProps) {

    const clickHeandler =():void=>{
      switch (button) {
        case `=`:
          calc(displayValue).then(res=>setDisplay(res))
          break;
        case `CE`:
          setDisplay(``)
          break   
        case `<`:
          setDisplay(prev=>prev.slice(0,-1))
          break   
        case`)`:
            validBrace(displayValue,`)`)&& setDisplay(prev=>prev+`${button}`)
           break
        case`(`:
            validBrace(displayValue,`(`) && setDisplay(prev=>prev+`${button}`)
           break
        case`+`:case`-`:case`/`:case`*`:case`%`:case`.`:case`)`:                
          validBrace(displayValue,button)&&setDisplay(prev=>prev+`${button}`)        
           break
        default: setDisplay(prev=>prev+`${button}`)
          break;
      }

    }

    return (
    <button 
    onClick={clickHeandler}
    className={`${button===`=`&&`bg-green-300`}
    text-4xl font-bold p-4 bg-gray-700 text-white rounded-md shadow-lg hover:shadow-2xl hover:bg-gray-800 ` }>
      {button}
    </button>
  )
}

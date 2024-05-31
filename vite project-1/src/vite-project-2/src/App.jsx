import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setCount] = useState([])
  const [val , setVal] = useState("")
const focusPoint = useRef(null);
const add = ()=>{
  setVal(focusPoint.current.value )
}

  return (
    <>
  
      <input type="text" ref = {focusPoint}/>
      <button onClick={add}>Add</button>
      <br />
    <ul>
 <textarea name="" id="">{val}</textarea>
    </ul>
    
    </>
  )
}

export default App

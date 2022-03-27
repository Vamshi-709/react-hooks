import React,{useState,useEffect,useRef} from 'react'

 function UseRefEx2() {
     const [name ,setName] =useState('')
     const prevName =useRef('')
     const renders =useRef(1)
     useEffect(()=>{
         renders.current =renders.current + 1
         prevName.current = name
     },[name])
  return (
    <div>
        <h2>Renders :{renders.current}</h2>
        <h2>prevName :{prevName.current}</h2>
        <input type='text' className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
  )
}
export default UseRefEx2
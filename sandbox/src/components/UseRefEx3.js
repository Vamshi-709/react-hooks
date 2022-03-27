import React,{useState} from 'react'
import Todo from './Todo'

 function UseRefEx3() {
     const [showTodo,setShowTodo]= useState(true)
  return (
    <div>
        {showTodo && <Todo />}
        <button className='btn btn-primary' onClick={()=>setShowTodo(!showTodo)}>Todo</button>
    </div>
  )
}
export default UseRefEx3
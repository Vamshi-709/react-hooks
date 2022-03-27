import React from 'react'
import UseFetch from '../hooks/UseFetch'


function CustomHook() {
    const {data,loading,error} = UseFetch('https://jsonplaceholder.typicode.com/posts',{})
   // console.log(res)

    if(loading){
return <h2>loading .....</h2>
    }
  return (
    <div>
      {data.map((post)=>(
          <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  )
}

export default CustomHook

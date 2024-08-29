import React, { useState } from 'react'

export default function Header({setRefresh}) {
  const [title,setTitle]=useState("");
  const addTodo=()=>{
    const newTodo={title,done:false}
    //console.log(newTodo);
    
    fetch(`http://localhost:3000/todos`,{
      method:'POST',
      header:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(newTodo)
    }).then(()=>{
      setTitle("");
      setRefresh(true);
      console.log('new todo added');
      
    })
  }
  return (
    <div id='todo-header' className='header'>
        <h1>to do list</h1>
        <input type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        
        <span className='add-button'
        onClick={addTodo}>Add</span>
      
    </div>
  )
}

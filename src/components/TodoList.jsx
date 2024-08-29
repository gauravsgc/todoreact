import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({isRefresh,setRefresh}) {
  const [todos,settodos]=useState([]);
  useEffect(()=>{
fetch(`http://localhost:3000/todos`).then(res=>{
  return res.json();
}).then(data=>{
  console.log(data);
  setRefresh(false);
  
  settodos(data);
}).catch(err=>{
  setRefresh(true)
  if(err.name=="Abort Error"){
    console.log('fetched aborted');
    
  }
})
  },[isRefresh,setRefresh])
  return (
    <div>
      <ul id="todo-list">
        {todos.map((todo)=>(
<TodoItem todo={todo} key={todo.id} setRefresh={setRefresh}/>
        ))}
      </ul>
      {/* <TodoItem/>
      <TodoItem/>
      <TodoItem/> */}
      
    </div>
  )
}

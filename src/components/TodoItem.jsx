import React from 'react'

export default function TodoItem({todo,setRefresh}) {
  const updateTodo=()=>{
    // console.log(todo);
    
    todo.done=!todo.done;
    // console.log(todo);

    fetch(`http://localhost:3000/todos/${todo.id}`,{
      method:'PUT',
      header:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(todo)
    }).then(()=>{
      setRefresh(true);
      console.log('new todo updated');
      
    })
    
  }

  const deleteTodo=()=>{
    

    fetch(`http://localhost:3000/todos/${todo.id}`,{
      method:'DELETE',
      header:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(todo)
    }).then(()=>{
      setRefresh(true);
      console.log('new todo delete');
      
    })
    
  }
  return (
    <div>
     {/* <ul id="todo-list">
     <li>hit the gym <span className='close'>x</span></li>
     </ul> */}
     <li className={`${todo.done?"checked":""}`}>
<div onClick={updateTodo}>{todo.title}</div>

<span className='close' onClick={deleteTodo}>x</span>
     </li>

    </div>
  )
}

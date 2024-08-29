import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
const [isRefresh,setIsRefresh]=useState(true);
const setRefresh=(status)=>{
setIsRefresh(status);
}
  return (
    <>
     <div className='content'>
<Header setRefresh={setRefresh}/>
<TodoList setRefresh={setRefresh} isRefresh={isRefresh}/>
     </div>
       
    </>
  )
}

export default App

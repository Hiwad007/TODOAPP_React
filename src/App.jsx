import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolistitem from './components/Todolistitem'

function App() {
  let [todoList ,setTodoList] = useState([])
  const saveTodo =(e)=>{
    let toname =e.target.toname.value;
    if(!todoList.includes(toname)){
      let finalTodo = [...todoList , toname]
      setTodoList(finalTodo)
    }
    else{
      alert("Todo Already Exist")
    }
    e.preventDefault()
  }
  let item = todoList.map((value,index)=>{
    return(
      <Todolistitem value= {value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}/>
    )
  })

  return (
    <>
    <h2>Todo App</h2>
    <form onSubmit={saveTodo} >
      <input type="text" name="toname"placeholder='Whats Your Plans Today' id="" />
      <button type='submit'>Add items</button>
    </form>
    <div className="outerDiv">
      <ul>
      {item}
        </ul>
    </div>
    </>
  )
}

export default App

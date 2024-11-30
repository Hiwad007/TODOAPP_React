import React, { useState } from 'react'

function Todolistitem({value,indexNumber,todoList,setTodoList}) {
    let[status , setStatus] = useState()
    const deleteRow = ()=>{
        let finalData = todoList.filter((e,i)=>i!=indexNumber);
        setTodoList(finalData)
    }
    const checkStatus =()=>{
        setStatus(!status)
    }
  return (
    <>
    <li className={(status) ? "completeTodo" : ""} onClick={checkStatus}>{indexNumber+1}{value}<span onClick={deleteRow}>&times;</span></li>
    </>
  )
}

export default Todolistitem
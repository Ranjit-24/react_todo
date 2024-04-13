import "./todocont.css"
import { createContext,useContext, useEffect, useState } from "react"
import { todocontext } from "./App"
import { Todotab } from "./todotab"
export const containercontext=createContext()
export function Todocontainer(){
  const {todolist,deletetodo,updatetodo}=useContext(todocontext)
  let [changekey,setchangekey]=useState(0);
  const inputtab=(event,key)=>{
      updatetodo(event.target.value,key)
      setchangekey(0)
  }

  useEffect(()=>{
    todolist.length===0 && setchangekey(0)
  },[todolist])

  return (
    <div id="todolist">{
      todolist.map((todoval,key)=>{
        key++
        return(
          <containercontext.Provider value={{changekey,key,todoval,inputtab}}>
         <li key={"todo"+key}>
          <input type ="checkbox" className="box" style={{opacity:changekey===key?"0.4":1}} checked={todoval.marked} onChange={()=>updatetodo(false,key,!todoval.marked)}/>
          <span className="checkmark"></span>
          <Todotab />
          <button className="edit" onClick={()=>setchangekey(key)} style={{opacity:changekey===key?"0.4":1}}>edit</button>
          <button className="delete" onClick={()=>changekey!==key && deletetodo(key)} style={{opacity:changekey===key?"0.4":1}}>-</button>
         </li>
         </containercontext.Provider>
      )})
    }
  </div>
)
}
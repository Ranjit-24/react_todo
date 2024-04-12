import "./todocont.css"
import { useContext, useState } from "react"
import { todocontext } from "./App"
import { Strike } from "./strike"
export function Todocontainer(){
  const {todolist,deletetodo,updatetodo}=useContext(todocontext)
  let [changekey,setchangekey]=useState(0);
  let upnewtodo='';
  const inputtab=(event,key)=>{
    if(event.key==="Enter"){
      updatetodo(event.target.value,key)
      setchangekey(0)
    }
  }
  return (
    <div id="todolist">{
      todolist.map((todoval,key)=>{
        key++
        return(
         <div>
          <input type ="checkbox" id={"checkbox"+(key)} checked={todoval.marked} onClick={()=>updatetodo(false,key,!todoval.marked)}/>
          { changekey===key ? <input type="text" value={todoval.todoname} onKeyDown={(event)=>inputtab(event,key)}/>:
            <Strike todoval={todoval}/>
          }
          <button id={"edit"+(key)} onClick={()=>setchangekey(key)}>edit</button>
          <button onClick={()=>deletetodo(key)}>-</button>
         </div>
      )})
    }
  </div>
)
}
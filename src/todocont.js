import "./todocont.css"
import { useContext, useState } from "react"
import { todocontext } from "./App"
import { Strike } from "./strike"
export function Todocontainer(){
  const {todolist,deletetodo,updatetodo}=useContext(todocontext)
  let [changekey,setchangekey]=useState(0);
  let [upnewtodo,setnewtodo]=useState('');
  const inputtab=(event,key)=>{
      updatetodo(event.target.value,key)
      setchangekey(0)
  }
  return (
    <div id="todolist">{
      todolist.map((todoval,key)=>{
        key++
        return(
         <div>
          <input type ="checkbox" id={"checkbox"+(key)} checked={todoval.marked} onChange={()=>updatetodo(false,key,!todoval.marked)}/>
          { changekey===key ? <input type="text" defaultValue={todoval.todoname} onKeyDown={(event)=>event.key=="Enter" && inputtab(event,key)}/>:
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
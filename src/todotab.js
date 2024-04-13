import { useContext } from "react"; 
import { containercontext } from "./todocont";
import "./todotab.css"
export function Todotab(){
    const {changekey,key,todoval,inputtab}=useContext(containercontext)
    return (
        <>
        { 
        (changekey===key) ? <input type="text" className="inputtodo" defaultValue={todoval.todoname} onKeyDown={(event)=>event.key=="Enter" && inputtab(event,key)}/>:
        <p className="ptodo">
         {
         todoval.marked ? <span style={{textDecoration: 'line-through'}}>
           {todoval[0]!==null && todoval.todoname}
           </span> : 
           <>{todoval[0]!==null && todoval.todoname}</>
         }
        </p>
        }
        </>
    )
}
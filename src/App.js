import "./App.css"
import { Todocontainer } from "./todocont";
import {useEffect, useState} from "react";
import { createContext } from "react";
export const todocontext = createContext();
function App() {
  let [todolist,addtodo]=useState(JSON.parse(localStorage.getItem("todo")));
  let [todo,newtodo]=useState('');
  useEffect(()=>localStorage.setItem("todo",JSON.stringify(todolist)))  
  
  let obj=(samplelist,val,mark)=>{
    return {
    id : samplelist.length===0?1:samplelist[samplelist.length-1].id +1,   
    todoname:val,
    marked: mark?mark:false
  }};
  
  function addnewtodo(val){
    addtodo([...todolist,obj(todolist,val)]);
  }

  function updatetodo(update,id,marked){
    let sample=[]
    todolist.map((task)=>task.id===id ? sample=[...sample,obj(sample,update?update:task.todoname,marked)]:sample=[...sample,task]);
    addtodo(sample);
  }

  function deletetodo(todoid){              
    let samplearr=[]
    todolist.map((task)=>{
      task.id!==todoid ? samplearr=[...samplearr,obj(samplearr,task.todoname,task.marked)]:console.log("Removed",task.todoname);
    })
    addtodo(samplearr);
  }
  return (
    <todocontext.Provider value={{todo,newtodo,todolist,addtodo,addnewtodo,deletetodo,updatetodo}}>
    <div className="App">
      <h1>Manage your Todos</h1>
      <input type="text" className="input" onKeyDown={(event)=>event.key=="Enter" && addnewtodo(todo)} onChange={(inputval)=>{newtodo(inputval.target.value)}}/>
      <button type="sumbit" onClick ={()=>addnewtodo(todo)}  >add</button>
      <Todocontainer list={todolist} delete_list={deletetodo}/>
      <button onClick={()=>addtodo([])}>x</button>
    </div>
    </todocontext.Provider>

  );
}
export default App;

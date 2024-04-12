export function Strike(props){
    return (
        <h1 id="todo">
            {
            props.todoval.marked ? <span style={{textDecoration: 'line-through'}}>
              {props.todoval[0]!==null && props.todoval.todoname}
              </span> : 
              <>{props.todoval[0]!==null && props.todoval.todoname}</>
            }
        </h1>
    )
}
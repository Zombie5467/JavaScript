export const Task = (props) => {
    return( 
        <div className="task"
        style={{backgroundColor: props.completed ? "green" : "black" }}>
          <h1>{props.taskName}</h1>
          <button onClick={() => props.completeTask(props.id)}>Completed</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>)
}
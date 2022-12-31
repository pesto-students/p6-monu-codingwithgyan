export const TodoRow = ({task,todo,setTodo,index}) => {
    const markTaskComplete = (index) => {
        const copyTodo = [...todo];
        copyTodo[index].status = true; 
        setTodo(copyTodo);
    }
    const deleteTask = (index) => {
        const copyTodo = [...todo];
        copyTodo.splice(index,1);
        setTodo(copyTodo);
    }
    return <div className="todo-row">
            <div className={!task.status?"todo-content":"todo-content todo-content-done"}>
                <h4>{task.label}</h4>
            </div>
            <div className="todo-action">
                <div onClick={()=>markTaskComplete(index)}>&#9745;</div>
                <div onClick={()=>deleteTask(index)}>&#9746;</div>
            </div>
    </div>
}
import { TodoRow } from "./TodoRow"

export const TodoList = ({todo,setTodo}) => {
    return  <>  
    <div className="todo-bg"></div>
     <div className="todo-list">
        {
            todo?.map((task,index) => {
                return <TodoRow task={task} todo={todo} setTodo={setTodo} index={index}/>
            })
        }
    </div>
    </>
}
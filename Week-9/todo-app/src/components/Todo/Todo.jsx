import { useState } from "react"
import { Search } from "../SearchBox/Search"
import { TodoList } from "../TodoList/TodoList"
import "../../styles/style.css";
export const Todo = () => {
    const [todo,setTodo] = useState([
        {label:"Task-1",status:false},
        {label:"Task-2",status:false},
        {label:"Task-3",status:false},
    ]);
    return <div>
                <Search todo={todo} setTodo={setTodo}/>
                <TodoList todo={todo} setTodo={setTodo}/>
    </div>
}
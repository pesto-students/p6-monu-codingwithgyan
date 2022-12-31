import { useState } from "react";
import "../../styles/style.css";
export const Search = ({todo,setTodo}) => {
    const getDefault = () => {
        return {
            label:"",
            status:false,
        }
    }
    const [input,setInput] = useState(getDefault());
    const handleInput = (e) => {
        input.label = e.target.value;
        setInput({...input});
    }
    const addToTaskList = () => {
        const copyTodo = [...todo];
        copyTodo.push(input);
        setTodo(copyTodo);
        // setInput(getDefault);
    }
    return <div className="search-box">
                <input type="text"placeholder="Enter task..." value={input.label} onChange={handleInput}/>
                <button onClick={addToTaskList}>Add</button>
    </div>
}
interface TodoInputProps {
    todo: string,
    setTodo: (value:string) => void,
    addTodo: (todo:string) => void
}

const TodoInput = ({todo,setTodo,addTodo}:TodoInputProps) => {
    return(
        <div>
            <input id="todo" type="text" value={todo} onChange={(event) => {setTodo(event.target.value)}}/>
            <button onClick={() => addTodo(todo)}>Add</button>
        </div>
    );
}

export default TodoInput;
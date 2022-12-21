import {ITodoItem} from '../Labo6Todo';

interface TodoItemProps {
    todo: ITodoItem,
    index: number,
    markCompleted: (index:number, checked:boolean) => void
}

const TodoItem = ({todo,index,markCompleted}:TodoItemProps) => {
    return(
        <div key={index}>
            <input type="checkbox" checked={todo.completed} onChange={(event) => {markCompleted(index, event.target.checked)}}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>
    );
}

export default TodoItem;
import {ITodoItem} from '../Labo6Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodoItem[],
    markCompleted: (index:number, checked:boolean) => void
}

const TodoList = ({todos,markCompleted}:TodoListProps) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} index={index} markCompleted={markCompleted}></TodoItem>
            ))}
        </div>
    );
}

export default TodoList;
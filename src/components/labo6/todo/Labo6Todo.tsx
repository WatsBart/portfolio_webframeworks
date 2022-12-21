import {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface ITodoItem { 
    name: string;
    completed: boolean;
}

const Labo6Todo = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
        setTodo("");
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}></TodoInput>
            <TodoList todos={todos} markCompleted={markCompleted}></TodoList>
        </div>
    );

}

export default Labo6Todo;
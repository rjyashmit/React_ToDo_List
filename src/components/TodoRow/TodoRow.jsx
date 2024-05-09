import { useState } from 'react';
import './TodoRow.css';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

export default function TodoRow() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addNewTodo = () => {
        if (input === "") return;
        setTodos([...todos, { todo: input }]);
        setInput("");
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="main">
            <h2>Todo</h2>
            {
                todos.map((todo, index) => <Checkbox key={index} todo={todo.todo} deleteTodo={() => deleteTodo(index)} />)
            }
            <div className="input-div">
                <input
                    type="text"
                    placeholder='Add task here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addNewTodo()}
                />
                <Button onClick={addNewTodo} />
            </div>
        </div>
    )
}
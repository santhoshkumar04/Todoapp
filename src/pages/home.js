import { useState } from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

function Home() {
    const [inputText, setInputText] = useState();
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <h1>Todo App</h1>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>

    );
}

export default Home;
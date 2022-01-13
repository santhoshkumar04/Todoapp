import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

function Home() {
    const [inputText, setInputText] = useState();
    const [todos, setTodos] = useState([]);
    return (
        <header className="App-header">
            <h1>Todo App</h1>
            <Link to="/axios">Axios</Link>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <TodoList todos={todos} setTodos={setTodos} />
        </header>
    );
}

export default Home;
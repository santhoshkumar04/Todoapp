import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;

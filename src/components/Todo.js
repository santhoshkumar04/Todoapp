
const Todo = ({ text, todo, todos, setTodos }) => {

    const deletetask = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completedTask = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={completedTask} />
            <li style={{
                listStyleType: "none",
                textDecoration: todo.completed ? "line-through" : null
            }}>
                {text}</li>
            <button onClick={deletetask}>X</button>
        </div>
    );
}

export default Todo;
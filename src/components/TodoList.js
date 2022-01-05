import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {

    return (
        <ul className="lists" >
            {
                todos.map((todo) => (
                    <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} completed={todo.completed} todo={todo} />
                ))
            }
        </ul >
    );
}

export default TodoList;
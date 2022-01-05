import { useState } from 'react';
const Todo = ({ text, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState(false);
    const [editUp, setEditup] = useState(text);


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

    const edittext = () => {
        setEdit(!edit);
    }

    const update = (e) => {
        e.preventDefault(e.target.value);
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, text: editUp
                }
            }
            return item;
        }

        ))
        //setEditup(text)
        setEdit(!edit)
    }

    const eva = (e) => {
        e.preventDefault(e.target.value);
        setEditup(e.target.value)
        //console.log(editUp + "===> todo edit submit!!");
    }

    return (
        <div style={{ display: "flex" }}>
            {!edit ? (
                <>
                    <input type="checkbox" onClick={completedTask} />
                    <li style={{
                        listStyleType: "none",
                        textDecoration: todo.completed ? "line-through" : null
                    }}>
                        {text}</li>
                    <button onClick={edittext} disabled={todo.completed}>Edit</button>
                    <button onClick={deletetask}>X</button>
                </>
            ) : (
                <>

                    <input type="Text" value={editUp} onChange={eva} />
                    <button onClick={update} >Save</button>
                    <button onClick={edittext} >Cancel</button>
                </>
            )}
        </div>
    );
}

export default Todo;
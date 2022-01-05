
const Form = ({ setInputText, inputText, todos, setTodos }) => {

    const inputHandler = (e) => {
        e.preventDefault(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            //console.log("value check");
            setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
            setInputText("");
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={inputText || ''} onChange={inputHandler} type="text" />
            <button>Add</button>
        </form>
    );
}

export default Form;

const Form = ({ setSearchTerm }) => {
  const inputTextHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        name="name"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;

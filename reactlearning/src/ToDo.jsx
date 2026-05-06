import { useState } from "react";
export default function ToDo() {
  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newToDo) {
      setToDos([...toDos, { text: newToDo, completed: false }]);
      setNewToDo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = toDos.filter((_, i) => i !== index);
    setToDos(newTodos);
  };

  const handleComplete = (index) => {
    const newTodos = [...toDos];
    newTodos[index].completed = !newTodos[index].completed;
    setToDos(newTodos);
  };

  return (
    <div>
      <h1> Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new to do "
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            {" "}
            <span
              className={`${todo.completed ? "text-green-500 underline" : "text-black"}`}
            >
              {" "}
              {index + 1}-{todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleComplete(index)}>
              {" "}
              {todo.completed ? "uncomplete" : "Complete"}{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

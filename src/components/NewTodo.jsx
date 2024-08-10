import { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((oldTodo) => ({
      ...oldTodo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form
      className="w-1/2 bg-gray-800 text-white p-2 rounded-lg mb-2"
      onSubmit={handleSubmit}
    >
      <div className="form-field flex my-4">
        <label htmlFor="title" className="mr-16">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
          className="border-none p-1 rounded-lg bg-white text-black w-full"
        />
      </div>
      <div className="form-field flex my-4">
        <label htmlFor="desc" className="mr-3">
          Description
        </label>
        <textarea
          name="desc"
          id="desc"
          value={todo.desc}
          onChange={handleChange}
          className="border-none resize-none p-1 rounded-lg bg-white w-full text-black"
        ></textarea>
      </div>
      <div>
        <button className="w-1/2 border-none rounded-lg bg-white text-black block mx-auto cursor-pointer hover:bg-orange-500 hover:text-white">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default NewTodo;

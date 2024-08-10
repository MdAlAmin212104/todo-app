import { useRef } from "react";

const NewTodo = (props) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    props.onAddTodo(newTodo);
    titleRef.current.value = "";
    descRef.current.value = "";
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
          ref={titleRef}
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
          ref={descRef}
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

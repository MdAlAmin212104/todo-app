import { useContext } from "react";
import SingleTodo from "./SingleTodo";
import { TodoContext } from "./Context";

const Todo = () => {
  const {todos, dispatch, ACTIONS } = useContext(TodoContext)
  const handleRemove = (id) => {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id } });
  };

  return (
    <div className="w-1/2 bg-gray-800 text-white p-2 rounded-lg overflow-scroll h-[60vh]">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} handleRemove={handleRemove}></SingleTodo>
      ))}
    </div>
  );
};

export default Todo;

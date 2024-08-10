import SingleTodo from "./SingleTodo";

const Todo = (props) => {
  //console.log(props.todo);
  const todo = props.todo;
  return (
    <div className="w-1/2 bg-gray-800 text-white p-2 rounded-lg overflow-scroll h-[60vh]">
      {todo.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} id={todo.id} onRemoveTodo={props.onRemoveTodo}></SingleTodo>
      ))}
    </div>
  );
};

export default Todo;

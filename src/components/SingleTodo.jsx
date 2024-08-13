import { MdDelete } from "react-icons/md";

const SingleTodo = ({todo, handleRemove}) => {
  const {id, title, desc} = todo;
  
  return (
    <article className="bg-gray-900 hover:bg-gray-800 m-2 rounded-lg flex justify-between p-2">
      <div>
        <h3 className="text-xl font-semibold text-left">{title}</h3>
        <p className="opacity-60 text-left">{desc}</p>
      </div>
      <div>
        <button className="text-red-600 text-3xl text-left" onClick={() => handleRemove(id)}><MdDelete /></button>
    </div>
    </article>
  );
};

export default SingleTodo;

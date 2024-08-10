import { useState } from 'react';
import './App.css'
import NewTodo from './components/NewTodo'
import Todo from './components/Todo'
import { v4 as uuidv4 } from 'uuid';

const dummyTodo = [
  { id: 1,
    title: "Todo Title 1",
    desc: "Todo description 1"
  },
  { id: 2,
    title: "Todo Title 2",
    desc: "Todo description 2"
  },
  { id: 3,
    title: "Todo Title 3",
    desc: "Todo description 3"
  },
  { id: 4,
    title: "Todo Title 4",
    desc: "Todo description 4"
  }
]

function App() {
  const [todos, setTodos] = useState(dummyTodo);
  

  const handleAddTodo = (todo) => {
    const {title, desc} = todo;
    console.log({id: uuidv4(), title, desc});
    setTodos((prevTodo) => {
      return [...prevTodo, {id: uuidv4(), title, desc}]
      
    });
  }

  const handleRemove = (id) => {
    setTodos(() => {
      const todoFilter = todos.filter((todo) => todo.id !== id);
      return todoFilter;
    });
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700">
        <h1 className='text-center text-5xl font-bold my-8 text-white'>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}></NewTodo>
        <Todo todo={todos} onRemoveTodo={handleRemove}></Todo>
        </div>
    </>
  )
}

export default App

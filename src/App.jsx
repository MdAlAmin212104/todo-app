import { useReducer } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';

const dummyTodo = [
  { id: 1, title: "Todo Title 1", desc: "Todo description 1" },
  { id: 2, title: "Todo Title 2", desc: "Todo description 2" },
  { id: 3, title: "Todo Title 3", desc: "Todo description 3" },
  { id: 4, title: "Todo Title 4", desc: "Todo description 4" },
];

// Define the actions
const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
};

// Define the reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        { id: uuidv4(), title: action.payload.title, desc: action.payload.desc },
      ];
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, dummyTodo);

  const handleAddTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
  };

  const handleRemove = (id) => {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id } });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700">
        <h1 className="text-center text-5xl font-bold my-8 text-white">Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo} />
        <Todo todo={todos} onRemoveTodo={handleRemove} />
      </div>
    </>
  );
}

export default App;

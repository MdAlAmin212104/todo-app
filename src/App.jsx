import './App.css';
import NewTodo from './components/NewTodo';
import Todo from './components/Todo';

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700">
        <h1 className="text-center text-5xl font-bold my-8 text-white">Todo App</h1>
        <NewTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;

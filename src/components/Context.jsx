import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

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

const Context = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, dummyTodo);
    
    


    return (
        <TodoContext.Provider value={{todos, dispatch, ACTIONS}}>
            {children}
        </TodoContext.Provider>
    )
};

export default Context;
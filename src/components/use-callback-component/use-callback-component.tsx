"use client";

import { useCallback, useState } from "react";
import Todos from "../todos/todos";

export function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // Function is recreated on every render
  const addTodoWithOutCallback = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // Function is only recreated when todos changes
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // Clear todos
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className='grid grid-cols-1 gap-4'>
      <div>
        <h4 className='font-medium'>Without useCallback</h4>
        <Todos todos={todos} addTodo={addTodoWithOutCallback} />
      </div>
      <div>
        <h4 className='font-medium'>With useCallback</h4>
        <Todos todos={todos} addTodo={addTodo} />
      </div>
      <div>
        <p> Count: {count}</p>
        <button
          className='p-2 leading-none border rounded-md'
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          className='p-2 leading-none border rounded-md'
          onClick={clearTodos}
        >
          Clear Todos
        </button>
      </div>
    </div>
  );
}

export default UseCallbackComponent;

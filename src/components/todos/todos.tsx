"use client";

import { memo, useRef } from "react";

type TodosProps = {
  todos: string[];
  addTodo: () => void;
};

const Todos = ({ todos, addTodo }: TodosProps) => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <>
      <h2>My Todos</h2>
      {todos &&
        todos.map((todo: string, index: number) => {
          return <p key={index}>{todo}</p>;
        })}
      <button className='p-2 leading-none border rounded-md' onClick={addTodo}>
        Add Todo
      </button>
      <span className='block text-sm my-4'>
        Rendered count: <span>{renderCounter.current}</span>
      </span>
    </>
  );
};

export default memo(Todos);

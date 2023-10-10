"use client";

import { useMemo, useState } from "react";
import TodoList from "./todo-list";
import { createTodos } from "./utils";

export function UseMemoComponent() {
  const [tab, setTab] = useState("all");
  const todos = useMemo(() => createTodos(), []);

  return (
    <div>
      <ToggleButton onClick={() => setTab("all")}>All</ToggleButton>
      <ToggleButton onClick={() => setTab("active")}>Active</ToggleButton>
      <ToggleButton onClick={() => setTab("completed")}>Completed</ToggleButton>
      <div>
        <TodoList todos={todos} tab={tab} />
      </div>
    </div>
  );
}

export function UseMemoNoCacheComponent() {
  const [tab, setTab] = useState("all");
  const todosWithoutCache = createTodos();

  return (
    <div>
      <ToggleButton onClick={() => setTab("all")}>All</ToggleButton>
      <ToggleButton onClick={() => setTab("active")}>Active</ToggleButton>
      <ToggleButton onClick={() => setTab("completed")}>Completed</ToggleButton>
      <div>
        <TodoList todos={todosWithoutCache} tab={tab} />
      </div>
    </div>
  );
}

const ToggleButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const { children, ...rest } = props;
  return (
    <button
      className='px-4 py-2 leading-none rounded-md bg-white shadow-sm border border-gray-100'
      {...rest}
    >
      {children}
    </button>
  );
};

export default UseMemoComponent;

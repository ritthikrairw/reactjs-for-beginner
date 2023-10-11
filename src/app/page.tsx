"use client";

import { Banner } from "@/components/banner/banner";
import Button from "@/components/button/button";
import NewTodoForm from "@/components/new-todo-form/new-todo-form";
import {
  TodoItem,
  TodoListItem,
} from "@/components/todo-list-item/todo-list-item";
import { useState } from "react";

function addNewTodo(
  todos: TodoItem[] | null | undefined,
  todo: TodoItem,
  setTodos: (todos: TodoItem[]) => void,
) {
  if (!todos) {
    localStorage.setItem("todos", JSON.stringify([todo]));
    setTodos([todo]);
    return;
  }

  localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  setTodos([...todos, todo]);
}

function filterTodo(
  action: "all" | "active" | "complete",
  setTodos: (todos: TodoItem[]) => void,
  setFilter?: (filter: "all" | "active" | "complete") => void,
) {
  const data: TodoItem[] | null | undefined = JSON.parse(
    localStorage.getItem("todos") || "null",
  );

  const filteredTodos = data?.filter((todo) => {
    if (action === "all") return true;
    if (action === "active") return !todo.completed;
    if (action === "complete") return todo.completed;
  });
  setTodos(filteredTodos || []);
  setFilter && setFilter(action);
}

export default function TodoList() {
  const data: TodoItem[] | null | undefined = JSON.parse(
    localStorage.getItem("todos") || "null",
  );

  const [todos, setTodos] = useState<TodoItem[] | null | undefined>(data);
  const [filter, setFilter] = useState<"all" | "active" | "complete">("all");

  const handleSubmit = (todo: TodoItem) => {
    addNewTodo(
      todos,
      {
        ...todo,
        id: todos ? todos.length + 1 : 1,
      },
      setTodos,
    );
  };

  const handleOnComplete = (todo: TodoItem) => {
    const data: TodoItem[] | null | undefined = JSON.parse(
      localStorage.getItem("todos") || "null",
    );
    const id = Number(todo.id);
    const updatedTodos = data?.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    filterTodo(filter, setTodos, setFilter);
  };

  const handleOnRemove = (todo: TodoItem) => {
    const data: TodoItem[] | null | undefined = JSON.parse(
      localStorage.getItem("todos") || "null",
    );
    const id = Number(todo.id);
    const updatedTodos = data?.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    filterTodo(filter, setTodos, setFilter);
  };

  return (
    <>
      <Banner
        title="Todo List"
        description="Todo List App with Next.js"
        image="/img/qingbao-meng-01_igFr7hd4-unsplash.jpg"
      />
      <main className="container relative z-10 mx-auto mt-6 max-w-screen-sm">
        <NewTodoForm onSubmit={handleSubmit} />
        <div className="mb-2 flex gap-1">
          <Button
            active={filter === "all"}
            onClick={() => filterTodo("all", setTodos, setFilter)}
          >
            All
          </Button>
          <Button
            active={filter === "active"}
            onClick={() => filterTodo("active", setTodos, setFilter)}
          >
            Active
          </Button>
          <Button
            active={filter === "complete"}
            onClick={() => filterTodo("complete", setTodos, setFilter)}
          >
            Complete
          </Button>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 divide-y">
            {todos && todos.length > 0 ? (
              todos.map((todo: TodoItem) => {
                return (
                  <TodoListItem
                    key={todo.id}
                    {...todo}
                    onComplete={handleOnComplete}
                    onRemove={handleOnRemove}
                  />
                );
              })
            ) : (
              <p className="text-center text-gray-400">Don't have any todo.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

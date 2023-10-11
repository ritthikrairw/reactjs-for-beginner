"use client";

import {
  SaveTodoRequest,
  addTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from "@/services/todos";
import { useState } from "react";
import Button from "../button/button";
import NewTodoForm from "../new-todo-form/new-todo-form";
import TodoListItem, { TodoItem } from "../todo-list-item/todo-list-item";

async function filterTodo(
  action: "all" | "active" | "completed",
  setTodos: (todos: TodoItem[]) => void,
  setFilter?: (filter: "all" | "active" | "completed") => void,
) {
  await getTodos({
    filter: action,
  }).then((res) => {
    if (res) {
      setTodos(res.data);
      setFilter && setFilter(action);
    }
  });
}

export interface TodoListProps {
  data: TodoItem[];
}
export function TodoList({ data }: TodoListProps) {
  const [todos, setTodos] = useState<TodoItem[]>(data);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleSubmit = async (todo: SaveTodoRequest) => {
    await addTodo(todo).then((res) => {
      if (res) setTodos((prev) => [...prev, res.data]);
    });
  };

  const handleOnComplete = async (todo: TodoItem) => {
    await updateTodo(todo.id, {
      title: todo.title,
      description: todo.description,
      favorite: todo.favorite,
      completed: todo.completed,
    }).then((res) => {
      if (res) filterTodo(filter, setTodos);
    });
  };

  const handleOnRemove = async (todo: TodoItem) => {
    await removeTodo(todo.id).then((res) => {
      if (res) {
        const newTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(newTodos);
      }
    });
  };

  return (
    <>
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
          active={filter === "completed"}
          onClick={() => filterTodo("completed", setTodos, setFilter)}
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
    </>
  );
}

export default TodoList;

import { TodoItem } from "@/components/todo-list-item/todo-list-item";

export interface GetTodoResponse {
  data: TodoItem[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface GetTodoRequest {
  filter?: "all" | "active" | "completed";
}

export async function getTodos(
  request: GetTodoRequest = { filter: "all" },
): Promise<GetTodoResponse> {
  const response = await fetch(
    `http://localhost:3000/api/todos?filter=${request.filter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export interface SaveTodoRequest {
  title: string;
  description?: string;
  favorite: boolean;
  completed: boolean;
}

export interface SaveTodoResponse {
  data: TodoItem;
  meta: {};
}

export async function addTodo(
  request: SaveTodoRequest,
): Promise<SaveTodoResponse> {
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export interface UpdateTodoRequest {
  title: string;
  description?: string;
  favorite: boolean;
  completed: boolean;
}

export interface UpdateTodoResponse {
  data: TodoItem;
  meta: {};
}

export async function updateTodo(
  id: number,
  request: UpdateTodoRequest,
): Promise<UpdateTodoResponse> {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export interface RemoveTodoResponse {
  data: TodoItem;
  meta: {};
}

export async function removeTodo(id: number): Promise<RemoveTodoResponse> {
  const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

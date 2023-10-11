import { Banner } from "@/components/banner/banner";
import TodoList from "@/components/todo-list/todo-list";
import { getTodos } from "@/services/todos";

export default async function TodoListPage() {
  const todos = await getTodos();

  return (
    <>
      <Banner
        title="Todo List"
        description="Todo List App with Next.js"
        image="/img/qingbao-meng-01_igFr7hd4-unsplash.jpg"
      />
      <main className="container relative z-10 mx-auto mt-6 max-w-screen-sm">
        <TodoList data={todos?.data} />
      </main>
    </>
  );
}

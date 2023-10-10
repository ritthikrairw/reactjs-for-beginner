import List from "./list";
import { filterTodos } from "./utils";

export default function TodoList({
  todos,
  tab,
}: {
  todos: any[];
  tab: string;
}) {
  const visibleTodos = filterTodos(todos, tab);
  return (
    <div>
      <List items={visibleTodos} />
    </div>
  );
}

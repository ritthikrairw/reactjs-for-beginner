import { formatDate } from "@/utils/format-date";
import classNames from "classnames";
import { useState } from "react";
import Checkbox from "../checkbox/checkbox";

export type TodoItem = {
  id: number;
  date: Date;
  title: string;
  description?: string;
  favorite: boolean;
  completed: boolean;
};

interface TodoListItemProps extends TodoItem {
  onComplete?: (todo: TodoItem) => void;
  onRemove?: (todo: TodoItem) => void;
}

export function TodoListItem({
  id,
  date,
  title,
  description,
  favorite,
  completed,
  onComplete,
  onRemove,
}: TodoListItemProps) {
  const [todo, setTodo] = useState<TodoItem>({
    id: id,
    date: date,
    title: title,
    description: description,
    favorite: favorite,
    completed: completed,
  });

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="relative flex gap-4">
        <Checkbox
          id={id.toString()}
          defaultChecked={completed}
          onChange={() => onComplete && onComplete(todo)}
        />
        <div>
          <h3
            className={classNames("text-lg font-semibold", {
              "line-through": completed,
            })}
          >
            {title}
          </h3>
          {description && (
            <p
              className={classNames("text-sm text-gray-600", {
                "line-through": completed,
              })}
            >
              {description}
            </p>
          )}
          <small className="text-xs text-gray-400">{formatDate(date)}</small>
        </div>
        <button
          className="absolute right-0 top-0 text-sm text-red-600 underline"
          onClick={() => onRemove && onRemove(todo)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;

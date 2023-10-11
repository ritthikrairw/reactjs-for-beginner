import { formatDate } from "@/utils/format-date";
import classNames from "classnames";
import { useState } from "react";
import Checkbox from "../checkbox/checkbox";

export type TodoItem = {
  id: number;
  title: string;
  description?: string;
  favorite: boolean;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

interface TodoListItemProps extends TodoItem {
  onComplete?: (todo: TodoItem) => void;
  onRemove?: (todo: TodoItem) => void;
}

export function TodoListItem({
  id,
  title,
  description,
  favorite,
  completed,
  createdAt,
  updatedAt,
  onComplete,
  onRemove,
}: TodoListItemProps) {
  const [todo, setTodo] = useState<TodoItem>({
    id: id,
    title: title,
    description: description,
    favorite: favorite,
    completed: completed,
    createdAt: createdAt,
    updatedAt: updatedAt,
  });

  const handleOnComplete = async (event: any) => {
    if (!onComplete) return;
    await onComplete({
      ...todo,
      completed: event.target.checked,
    });
  };

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="relative flex gap-4">
        <Checkbox checked={completed} onChange={handleOnComplete} />
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
          <small className="text-xs text-gray-400">
            {createdAt && formatDate(createdAt)}
          </small>
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

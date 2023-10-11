import { useState } from "react";
import Checkbox from "../checkbox/checkbox";
import InputText from "../input-text/input-text";
import { TodoItem } from "../todo-list-item/todo-list-item";

export interface NewTodoFormProps {
  onSubmit: (todo: TodoItem) => void;
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (title === "") {
      alert("Please enter a title.");
      return;
    }

    onSubmit({
      id: Math.floor(Math.random() * 1000) + 1,
      date: new Date(),
      title: title,
      description: description,
      favorite: false,
      completed: completed,
    });

    setTitle("");
    setDescription("");
    setCompleted(false);
  }

  const handleOnChange = () => {
    setCompleted(!completed);
  };

  return (
    <form
      className="mb-4 flex gap-1 rounded-md bg-white p-4"
      onSubmit={handleSubmit}
    >
      <Checkbox
        onChange={handleOnChange}
        checked={completed}
        defaultChecked={completed}
      />
      <InputText
        placeholder="Create a new todo."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </form>
  );
}

export default NewTodoForm;

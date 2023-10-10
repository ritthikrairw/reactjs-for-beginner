export function createTodos() {
  const todos = [];

  // calcuate text and completed randomly
  const randomText = () => {
    const text = ["Learn React", "Learn TypeScript", "Learn Nextjs"];
    return text[Math.floor(Math.random() * text.length)];
  };

  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo: " + randomText() + " " + i,
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos: any[], tab: string) {
  console.log("Filtering " + todos.length + ' todos for "' + tab + '" tab.');

  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}

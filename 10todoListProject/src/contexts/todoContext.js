import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "My Task list",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};

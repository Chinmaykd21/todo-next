import allTodos from "./todos.json";

export interface todoProps {
  id: string;
  title: string;
  category: string;
  description: string;
  isFinished: false;
}

export const categories: string[] = [
  "Programming",
  "Household",
  "NextJS",
  "Office",
];

export const idExists = (todoId: string) => {
  allTodos.forEach((todo) => {
    if (todo?.id === todoId) {
      return true;
    }
  });
  return false;
};

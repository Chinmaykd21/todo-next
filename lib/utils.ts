import data from "./data.json";

export interface todoProps {
  id: string;
  title: string;
  category: string;
  description: string;
  isFinished: boolean;
}

export const categories: string[] = [
  "Programming",
  "Household",
  "NextJS",
  "Reading",
];

export const idExists = (todoId: string) => {
  let exists = false;
  data?.allTodos.forEach((todo) => {
    if (todo?.id === todoId) {
      exists = true;
      return;
    }
  });
  return exists;
};

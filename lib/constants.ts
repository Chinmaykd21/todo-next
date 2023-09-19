export interface todoProps {
  id: number;
  title?: string;
  description?: string;
  isFinished?: boolean;
  category?: "Programming" | "Reading" | "Household" | "Studying" | null;
}

export const todos: todoProps[] = [
  {
    id: 1,
    title: "First TODO",
    category: "Programming",
    description: "This app is in nextJS programming",
    isFinished: false,
  },
  {
    id: 2,
    title: "Second TODO",
    category: "Studying",
    description: "NextJS study",
    isFinished: true,
  },
  {
    id: 3,
    title: "Third TODO",
    category: "Reading",
    description: "There is nothing interesting to read",
    isFinished: false,
  },
  {
    id: 4,
    title: "Fourth TODO",
    category: "Household",
    description: "Some household chores are still remaining",
    isFinished: false,
  },
];

export interface todoProps {
  id: number;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  isFinished?: boolean;
  category?:
    | "Programming"
    | "Reading"
    | "Gaming"
    | "Household"
    | "Studying"
    | null;
}

export const todos: todoProps[] = [
  {
    id: 1,
    title: "First TODO",
    category: "Programming",
    description: "This app is in nextJS programming",
    startDate: new Date(),
    endDate: new Date(),
    isFinished: false,
  },
  {
    id: 2,
    title: "Second TODO",
    category: "Studying",
    description: "NextJS study",
    startDate: new Date(),
    endDate: new Date(),
    isFinished: true,
  },
  {
    id: 3,
    title: "Third TODO",
    category: "Reading",
    description: "There is nothing interesting to read",
    startDate: new Date(),
    endDate: new Date(),
    isFinished: false,
  },
  {
    id: 4,
    title: "Fourth TODO",
    category: "Household",
    description: "Some household chores are still remaining",
    startDate: new Date(),
    endDate: new Date(),
    isFinished: false,
  },
];

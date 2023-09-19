"use client";
import { todoProps } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Todo = ({ todo }: { todo: todoProps }) => {
  const [completed, setCompleted] = useState(todo?.isFinished);
  const router = useRouter();

  if (!todo) {
    return;
  }

  const color =
    todo?.category === "Programming"
      ? "badge-primary"
      : todo?.category === "Household"
      ? "badge-secondary"
      : todo?.category === "Reading"
      ? "badge-accent"
      : "";

  const styles = `badge ${color} badge-outline`;

  const handleClick = (todo: todoProps) => {
    setCompleted((prevState) => (todo.isFinished = !prevState));
  };

  const handleEdit = () => {
    router.push(`/edit/${todo?.id}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-1/3" data-theme="cupcake">
      <div className="card-body">
        <div className="flex flex-row justify-between items-center space-x-3">
          <h2 className="card-title">{todo?.title}</h2>
          <input
            type="checkbox"
            checked={completed}
            className="checkbox"
            onChange={() => handleClick(todo)}
          />
        </div>
        <div className={styles}>{todo?.category}</div>

        <p>{todo?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

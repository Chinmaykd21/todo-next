"use client";
import { todoProps } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export const Todo = ({ data }: { data: todoProps }) => {
  const [completed, setCompleted] = useState(data?.isFinished);
  const router = useRouter();

  if (!data) {
    return;
  }

  const color =
    data?.category === "Programming"
      ? "badge-primary"
      : data?.category === "Household"
      ? "badge-secondary"
      : data?.category === "Reading"
      ? "badge-accent"
      : "";

  const styles = `badge ${color} badge-outline`;

  const handleClick = (data: todoProps) => {
    if (!data) {
      toast.error("Could not update status", {
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
        duration: Infinity,
      });
    }
    setCompleted((prevState) => (data.isFinished = !prevState));
    toast("Todo status updated successfully", {
      action: {
        label: "Dismiss",
        onClick: () => toast.dismiss(),
      },
      duration: Infinity,
    });
  };

  const handleEdit = () => {
    router.push(`/edit/${data?.id}`);
  };

  const handleDelete = () => {
    router.push(`/delete/${data?.id}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl h-1/3" data-theme="cupcake">
      <div className="card-body">
        <div className="flex flex-row justify-between items-center space-x-3">
          <h2 className="card-title">{data?.title}</h2>
          <input
            type="checkbox"
            checked={completed}
            className="checkbox"
            onChange={() => handleClick(data)}
          />
        </div>
        <div className={styles}>{data?.category}</div>

        <p>{data?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-error" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

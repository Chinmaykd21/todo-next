"use client";
import { todoProps } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import TodoModal from "./todo-modal";

export const Todo = ({ data }: { data: todoProps }) => {
  const router = useRouter();
  const [completed, setCompleted] = useState(data?.isFinished);

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
    const modalElement = document?.getElementById("my_modal_1");
    if (modalElement) {
      // @ts-ignore
      modalElement?.showModal();
    }
  };

  const handleDelete = async () => {
    const res: Response = await fetch(`/api/delete/${data?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res?.json();
    if (result?.error) {
      toast(`Error deleting ${result?.error}`, {
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
        duration: Infinity,
      });
      return;
    }

    toast(`${data?.title} has been deleted successfully`, { duration: 10 });
    router.push("/");
  };

  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl h-1/3"
        data-theme="cupcake"
      >
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
        <TodoModal />
      </div>
    </>
  );
};

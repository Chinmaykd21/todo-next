"use client";
import { todoProps } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import TodoModal from "./todo-modal";

export const Todo = ({ data }: { data: todoProps }) => {
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

  const handleEdit = () => {
    const modalElement = document?.getElementById(`${data?.id}`);
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
        duration: 5000,
      });
      return;
    }
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
            <button className="btn btn-outline">
              {data?.isFinished ? "Completed" : "Incomplete"}
            </button>
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
      <TodoModal key={data?.id} data={data} />
    </>
  );
};

"use client";

import { categories, todoProps } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const TodoModal = ({ data }: { data: todoProps }) => {
  const [formData, setFormData] = useState(data);
  const router = useRouter();

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (
      !formData ||
      formData?.category === "Select A Category" ||
      formData?.title?.length === 0 ||
      formData?.description?.length === 0
    ) {
      toast("Invalid Data!", {
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
        duration: Infinity,
      });
      return;
    }

    const res = await fetch("/api/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updateData: formData }),
    });

    const result = await res.json();
    if (result?.error) {
      toast(`${result?.error}`, {
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
        duration: Infinity,
      });
      return;
    }
    router.push("/");
  };
  return (
    <>
      <dialog id={`${data?.id}`} className="modal">
        <div className="modal-box">
          <div className="flex flex-row justify-center mt-3 items-center">
            <p className="text-3xl">Edit {data?.title}</p>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  value={formData?.title}
                  className="input input-bordered"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e?.target?.value })
                  }
                />
              </div>
              <div className="form-control mt-4">
                <textarea
                  value={formData?.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e?.target?.value,
                    })
                  }
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                />
                <select
                  className="select select-bordered mt-3 mb-3 select-sm w-full max-w-xs"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e?.target?.value })
                  }
                  defaultValue={"Category"}
                >
                  <option disabled>Category</option>
                  {categories?.map((category, i) => {
                    return <option key={i}>{category}</option>;
                  })}
                </select>
              </div>
              <div className="form-control">
                <button className="btn btn-info btn-outline">EDIT</button>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TodoModal;

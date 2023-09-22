"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories, todoProps } from "@/lib/utils";
import { Toaster, toast } from "sonner";

const AddTodo = () => {
  const router = useRouter();

  const newTodo: todoProps = {
    id: crypto.randomUUID(),
    title: "",
    description: "Description",
    isFinished: false,
    category: "Select A Category",
  };
  const [formData, setFormData] = useState(newTodo);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      !formData ||
      formData?.category === "Select A Category" ||
      formData?.title?.length === 0 ||
      formData?.description === "Description"
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

    const res = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result: Response = await res.json();
    console.log(`result -> ${JSON.stringify(result)}`);
    router.push("/");
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col w-full">
          <div
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl"
            data-theme="cupcake"
          >
            <div className="flex flex-row justify-center mt-3 items-center">
              <p className="text-3xl">Add Todo</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Title"
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
                  <button className="btn btn-primary btn-outline">ADD</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AddTodo;

"use client";

import { todoCategories, todoProps, todos } from "@/lib/constants";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const AddTodo = () => {
  const addTodo: todoProps = {
    id: "dsgfads",
    title: "",
    description: "",
    isFinished: false,
    category: "Select A Category",
  };
  const [formData, setFormData] = useState(addTodo);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      !formData ||
      formData?.category === "Select A Category" ||
      formData?.title?.length === 0 ||
      formData?.description?.length === 0
    ) {
      console.log("Inside", JSON.stringify(formData));
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

    const result = await res.json();
    console.log(`res -> ${result}`);
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col">
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
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your todo title"
                    className="input input-bordered"
                    onChange={(e) =>
                      setFormData({ ...formData, title: e?.target?.value })
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Todo Description"
                    className="input input-bordered"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e?.target?.value,
                      })
                    }
                  />
                  <select
                    className="select select-bordered mt-3 mb-3 select-sm w-full max-w-xs"
                    onChange={(e) =>
                      setFormData({ ...formData, category: e?.target?.value })
                    }
                    defaultValue={"Category"}
                  >
                    <option disabled>Category</option>
                    {todoCategories?.map((todoCategory, i) => {
                      return <option key={i}>{todoCategory}</option>;
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

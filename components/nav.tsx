"use client";

import { useState } from "react";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";

const NavBar = () => {
  const [filter, setFilter] = useState(
    "Filter By Name, Category, Complete Status"
  );

  const segments = useSelectedLayoutSegments();
  const router = useRouter();

  const handleAddTodoClick = () => {
    router.push(`/add`);
  };

  const buttonAdd =
    segments[1] !== "add" ? (
      <button
        className="btn btn-success btn-outline"
        onClick={handleAddTodoClick}
      >
        Add Todo
      </button>
    ) : null;

  return (
    <div className="navbar bg-base-100 text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Todo App
        </a>
      </div>
      <div className="navbar-end flex flex-row justify-end gap-3">
        <div className="form-control">
          <input
            type="text"
            placeholder={filter}
            className="input input-bordered"
            onChange={(e) => setFilter(e?.target?.value)}
          />
        </div>
        {buttonAdd}
      </div>
    </div>
  );
};

export default NavBar;

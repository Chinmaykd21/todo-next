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
    <div className="navbar bg-base-100 text-white flex justify-evenly">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Todo App
        </a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder={filter}
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setFilter(e?.target?.value)}
          />
        </div>
      </div>
      <div className="navbar-end">{buttonAdd}</div>
    </div>
  );
};

export default NavBar;

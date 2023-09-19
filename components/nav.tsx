"use client";

import { useState } from "react";
import ShowModal from "./showModal";

const NavBar = () => {
  const [filter, setFilter] = useState(
    "Filter By Name, Category, Complete Status"
  );
  const [show, setShow] = useState(false);

  const handleAboutClick = (): JSX.Element => {
    // TODO: Modal not displaying
    setShow((prevState) => (prevState = !prevState));
    return <ShowModal showStatus={show} />;
  };
  return (
    <div className="navbar bg-base-100 text-white flex justify-evenly">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Todo App</a>
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
      <div className="navbar-end">
        <button
          className="btn btn-success btn-outline"
          onClick={handleAboutClick}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default NavBar;

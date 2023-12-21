import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-slate-200">
      <div className="max-container flex justify-between">
        <div className="">
          <Link className="btn btn-ghost text-xl">Todolist</Link>
        </div>
        <div className="flex items-center gap-3">
          <p>Welcome John</p>
          <button className="btn btn-secondary btn-sm">Loguot</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

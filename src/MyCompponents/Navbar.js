import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="bg-[#CAD5E2] flex place-items-center pl-8 pr-4 pt-6 pb-6 gap-7 sm:pl-12 sm:gap-8 md:gap-16 md:pl-16">
        <h1 className="text-xl font-bold md:text-2xl">
          <NavLink to="/">Todo-App</NavLink>{" "}
        </h1>
        <nav>
          <ul className="flex justify-between gap-5 font-semibold sm:gap-8 ">
            <li className="hover:text-[#FF6666] md:text-xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#FF6666] md:text-xl">
              <NavLink to="/mytodo">MyTodos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

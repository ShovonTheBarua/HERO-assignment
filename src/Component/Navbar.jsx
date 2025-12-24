import React from "react";
import { Link, NavLink } from "react-router";
import image from "../../assets/logo.png";
import { ImGithub } from "react-icons/im";
// import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/apps">Apps</NavLink>
            <NavLink to="/installation">Installation</NavLink>
          </ul>
        </div>
        <Link className="flex items-center">
          <img className="btn btn-ghost  " src={image} alt="" />
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex font-semibold gap-4 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          <NavLink className="group" to="/">
            <span className="group-[.active]:border-[#9F62F2] border-b-2">
              Home
            </span>
          </NavLink>
          <NavLink className="group" to="/apps">
            <span className="group-[.active]:border-[#9F62F2] border-b-2">
              Apps
            </span>
          </NavLink>
          <NavLink className="group" to="/installation">
            <span className="group-[.active]:border-[#9F62F2] border-b-2">
              Installation
            </span>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end font-semibold">
        <Link
          to="https://github.com/ShovonTheBarua"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          <span>
            <ImGithub className="text-xl" />
          </span>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

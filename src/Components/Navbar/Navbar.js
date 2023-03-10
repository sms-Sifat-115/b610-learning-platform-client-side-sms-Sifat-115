import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar md:bg-base-300 bg-fuchsia-500 md:text-purple-500 text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact text-purple-500 dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <Link to={Home}>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-around h-10 dropdown-content  menu menu-compact ">
                  Courses
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 text-purple-500 bg-base-300">
                  <li>
                    <Link>HTML</Link>
                  </li>
                  <li>
                    <Link>CSS</Link>
                  </li>
                  <li>
                    <Link>React</Link>
                  </li>
                  <li>
                    <Link>Firebase</Link>
                  </li>
                  <li>
                    <Link>English</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="mt-10">FAQ</Link>
              </li>
              <li>
                <Link className="btn btn-primary mt-4 text-primary-content">
                  Login
                </Link>
              </li>
              <li>
                <Link className="btn btn-neutral my-3 text-primary-content">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <Link to={Home} className="btn btn-ghost normal-case text-xl">
            <img src="./favicon.ico" alt="" className="h-10 mr-3" />
            Scholarholic
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={Home}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link>
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-300">
                <li>
                  <Link>HTML</Link>
                </li>
                <li>
                  <Link>CSS</Link>
                </li>
                <li>
                  <Link>React</Link>
                </li>
                <li>
                  <Link>Firebase</Link>
                </li>
                <li>
                  <Link>English</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-primary input-ghost w-full max-w-xs"
            />
            <button className="btn btn-outline btn-primary btn-square ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <button className="btn btn-ghost btn-circle ml-7">
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-on fill-current w-10 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-10 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </button>
          <button className="indicator btn btn-ghost btn-circle p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </button>
        </div>
        <div className="navbar-end hidden sm:flex">
          <Link className="btn btn-primary">Login</Link>
          <Link className="btn btn-primary btn-outline btn-ghost mx-3">
            Register
          </Link>
        </div>
      </div>
      <div className="btm-nav lg:hidden bottom-0">
        <Link to={Home} className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <Link className="text-primary active">
          <FontAwesomeIcon className="fa-thin" icon={faGraduationCap} />
        </Link>
        <Link className="text-primary">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/Context";

const Header = () => {
  const { singoutUser, user } = useContext(AuthContext);
  const li = (
    <>
      <li>
        <Link to="/services">Services</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/reviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/add/service">Add Services</Link>
          </li>
          <li>
            <Link onClick={singoutUser}>Logout</Link>
          </li>
          <li>
           
              <div className="avatar">
                <div className="  w-12 rounded-full  ring-slate-600 ring-offset-4">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
          
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-md mb-10">
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
              className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52"
            >
              {li}
            </ul>
          </div>
          <img src={Logo} className="h-20" alt="" />
          <Link to="/" className=" normal-case ">
            <p className="text-xl font-medium ml-2">Picoritamy</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{li}</ul>
        </div>
      </div>
    </>
  );
};

export default Header;

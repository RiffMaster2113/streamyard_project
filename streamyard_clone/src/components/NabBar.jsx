import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center w-screen h-12 px-8 bg-gray-500 text-white">
        <img src="./assets/logo" alt="logo" className="h-8" />

        <ul className="flex space-x-4">
          <NavLink to="/" end>
            <li className="hover:cursor-pointer">Home</li>
          </NavLink>

          <NavLink to="/login">
            <li className="hover:cursor-pointer">Login</li>
          </NavLink>

          <NavLink to="/register">
            <li className="hover:cursor-pointer">Register</li>
          </NavLink>

          <NavLink to="/dashboard">
            <li className="hover:cursor-pointer">Dashboard</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

import { AuthContext } from "../config/AuthProvider";
import { useContext } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { FrontendSideBar } from "./FrontendSideBar";

export function Sidebar({ menu }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="md:col-span-1 md:flex md:justify-end px-5 mt-5 xl:col-span-2">
      <nav className="text-right">
        <div className="flex justify-between md:justify-end">
          <h2 className="font-semibold mb-5 text-green-700 xl:text-2xl">
            Food App
          </h2>
          <div className="md:hidden">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <ul className="hidden md:block">
          <FrontendSideBar menu={menu} />
          {currentUser ? <AdminSideBar menu={menu} /> : null}
        </ul>
      </nav>
    </div>
  );
}

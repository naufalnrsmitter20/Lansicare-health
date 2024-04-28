import Link from "next/link";
import React from "react";

function DashboardIcon() {
  return (
    <Link
      href="/administration/insight"
      className="group flex items-center rounded-lg p-2 py-3 text-white hover:bg-darkBlue"
    >
      <svg
        className="h-5 w-5 text-gray-400 transition duration-75 group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
      <span className="ms-3">Dashboard</span>
    </Link>
  );
}

export default DashboardIcon;

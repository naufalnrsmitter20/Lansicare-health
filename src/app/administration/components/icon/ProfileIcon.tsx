"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ProfileIcon() {
  const UsePathnames = usePathname();

  return (
    <Link
      href="/administration/profile"
      className={` ${UsePathnames === "/administration/profile" ? "bg-darkBlue text-white" : "text-white "} group flex items-center rounded-lg p-2 py-3 hover:bg-darkBlue`}
    >
      <svg
        className={`h-5 w-5 transition duration-75 group-hover:text-white ${UsePathnames === "/administration/profile" ? "text-white" : "text-gray-400"}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </svg>

      <span className="ms-3 flex-1 whitespace-nowrap">Profile</span>
    </Link>
  );
}

export default ProfileIcon;

"use client";
import { signOut } from "next-auth/react";
import React from "react";

function LogoutIcon() {
  return (
    <button
      className="group flex w-full items-center rounded-lg p-2 py-3 text-white hover:bg-red-600"
      type="button"
      onClick={() => signOut()}
    >
      <svg
        className="group-hover: h-5 w-5  flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
      <span className="ms-3 flex-1 whitespace-nowrap text-start">Logout</span>
    </button>
  );
}

export default LogoutIcon;

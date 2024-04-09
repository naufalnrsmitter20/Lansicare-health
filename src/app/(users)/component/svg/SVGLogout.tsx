"use client";
import { signOut } from "next-auth/react";
import React from "react";

function SVGLogout() {
  return (
    <div>
      <button
        className="group mx-auto flex justify-center rounded-lg p-2 lg:block"
        type="button"
        onClick={() => signOut()}
      >
        <svg
          className="group mx-auto h-5 w-5 flex-shrink-0 text-base-100 transition duration-75 group-hover:text-red-600"
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
        <span className="ms-3 flex-1  text-center text-[12px] font-semibold text-base-100 group-hover:text-red-600">
          Logout
        </span>
      </button>
    </div>
  );
}

export default SVGLogout;

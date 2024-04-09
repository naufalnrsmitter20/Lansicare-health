import Link from "next/link";
import React from "react";

function ApotekIcon() {
  return (
    <Link
      rel="links"
      href="https://apotek-amanah.000webhostapp.com/"
      className="group flex items-center  rounded-lg p-2 py-3 text-white hover:bg-darkBlue"
    >
      <svg
        className="group-hover: h-5 w-5  flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0Zm12 7h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2Z" />
      </svg>

      <span className="ms-3 flex-1 whitespace-nowrap">Apotek</span>
    </Link>
  );
}

export default ApotekIcon;

import Link from "next/link";
import React from "react";

function HomeIcon() {
  return (
    <div>
      <Link
        href={"/"}
        className="group mx-auto flex justify-center rounded-lg p-2 lg:block"
      >
        <svg
          width="18"
          className="group block h-5 w-5 flex-shrink-0 text-base-100 transition duration-75 group-hover:text-darkBlue lg:mx-auto"
          height="19"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.738785 12.4677V7.38947C0.738785 6.54831 1.145 5.75893 1.82947 5.27001L6.49319 1.93864C6.946 1.61519 7.55429 1.61518 8.00711 1.93861L12.6713 5.27001C13.3558 5.75893 13.762 6.54834 13.762 7.38953V12.4677C13.762 13.5466 12.8874 14.4212 11.8086 14.4212H9.94781C9.22856 14.4212 8.64549 13.8381 8.64549 13.1189V12.1421C8.64549 11.6027 8.20819 11.1654 7.66875 11.1654H6.83154C6.2921 11.1654 5.85479 11.6027 5.85479 12.1421V13.1189C5.85479 13.8381 5.27172 14.4212 4.55247 14.4212H2.69227C1.61339 14.4212 0.738785 13.5466 0.738785 12.4677Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
        </svg>
        <p className="rounded px-2 text-[12px] font-semibold text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
          Home
        </p>
      </Link>
    </div>
  );
}

export default HomeIcon;

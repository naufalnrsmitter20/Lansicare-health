import Link from "next/link";
import React from "react";

function AboutIcon() {
  return (
    <div>
      <Link
        href={"/about"}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.04069 1.86688C1.59116 1.86688 1.22674 2.23129 1.22674 2.68083V9.84358C1.22674 10.2931 1.59116 10.6575 2.04069 10.6575H12.4592C12.9088 10.6575 13.2732 10.2931 13.2732 9.84358V2.68083C13.2732 2.23129 12.9088 1.86688 12.4592 1.86688H2.04069ZM0.25 2.68083C0.25 1.69186 1.05172 0.890137 2.04069 0.890137H12.4592C13.4482 0.890137 14.2499 1.69186 14.2499 2.68083V9.84358C14.2499 10.8326 13.4482 11.6343 12.4592 11.6343H2.04069C1.05172 11.6343 0.25 10.8326 0.25 9.84358V2.68083Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.625794 3.47921C0.744714 3.23712 1.03737 3.13728 1.27946 3.2562L7.17837 6.15391C7.22364 6.17614 7.27666 6.17614 7.32192 6.15391L13.2208 3.2562C13.4629 3.13728 13.7556 3.23712 13.8745 3.47921C13.9934 3.7213 13.8936 4.01395 13.6515 4.13287L7.75257 7.03058C7.43571 7.18624 7.06459 7.18624 6.74773 7.03059L0.848808 4.13287C0.606721 4.01395 0.506874 3.7213 0.625794 3.47921Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.60576 6.34495C9.55698 6.30954 9.49262 6.30399 9.43849 6.33051L7.75136 7.15721C7.43505 7.3122 7.06484 7.3122 6.74854 7.15721L5.0614 6.33051C5.00727 6.30399 4.94292 6.30954 4.89414 6.34495L1.02525 9.15348C0.806977 9.31193 0.501585 9.26343 0.343136 9.04516C0.184687 8.82689 0.233183 8.5215 0.451454 8.36305L4.32034 5.55452C4.6618 5.30665 5.11228 5.26775 5.49118 5.45341L7.17832 6.2801C7.2235 6.30225 7.27639 6.30225 7.32158 6.2801L9.00871 5.45341C9.38762 5.26775 9.83809 5.30665 10.1796 5.55452L14.0484 8.36305C14.2667 8.5215 14.3152 8.82689 14.1568 9.04516C13.9983 9.26343 13.6929 9.31193 13.4746 9.15348L9.60576 6.34495Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
        </svg>
        <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
          About
        </p>
      </Link>
    </div>
  );
}

export default AboutIcon;

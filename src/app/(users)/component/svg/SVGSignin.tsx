import { signIn } from "next-auth/react";
import React from "react";

function SVGSignin() {
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="group mx-auto flex justify-center px-3 py-2 lg:block"
      >
        <svg
          width="18"
          className="group mx-auto block h-5 w-5 flex-shrink-0 text-base-100 transition duration-75 group-hover:text-darkBlue"
          height="19"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.75 8.15614C0.75 7.85875 0.991077 7.61768 1.28846 7.61768H10.6218C10.9192 7.61768 11.1603 7.85875 11.1603 8.15614C11.1603 8.45352 10.9192 8.6946 10.6218 8.6946H1.28846C0.991077 8.6946 0.75 8.45352 0.75 8.15614Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.36924 4.18579C7.57953 3.97551 7.92046 3.97551 8.13074 4.18579L11.6697 7.72476C11.908 7.96308 11.908 8.34948 11.6697 8.5878L8.13074 12.1268C7.92046 12.3371 7.57953 12.3371 7.36924 12.1268C7.15896 11.9165 7.15896 11.5756 7.36924 11.3653L10.5782 8.15628L7.36924 4.94729C7.15896 4.73701 7.15896 4.39607 7.36924 4.18579Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3227 1.45521C10.3227 1.15783 10.5638 0.916748 10.8612 0.916748H14.1398C14.4768 0.916748 14.7501 1.18997 14.7501 1.527V14.7851C14.7501 15.1222 14.4768 15.3954 14.1398 15.3954H10.3825C10.0851 15.3954 9.84407 15.1543 9.84407 14.8569C9.84407 14.5595 10.0851 14.3185 10.3825 14.3185H13.6731V1.99367H10.8612C10.5638 1.99367 10.3227 1.75259 10.3227 1.45521Z"
            className=" fill-base-100 group-hover:fill-Navbar-Hover"
          />
        </svg>
        <p className="rounded px-2 text-[12px] text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
          Sign In
        </p>
      </button>
    </div>
  );
}

export default SVGSignin;

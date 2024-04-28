import Link from "next/link";
import React from "react";

function ProfileIcon() {
  return (
    <div>
      <Link
        href={"/profile"}
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
          <g filter="url(#filter0_d_627_1060)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.55084 1.04626C6.1888 1.04626 5.08465 2.15042 5.08465 3.51246C5.08465 4.8745 6.1888 5.97865 7.55084 5.97865C8.91288 5.97865 10.017 4.8745 10.017 3.51246C10.017 2.15042 8.91288 1.04626 7.55084 1.04626ZM4.03838 3.51246C4.03838 1.57258 5.61096 0 7.55084 0C9.49071 0 11.0633 1.57258 11.0633 3.51246C11.0633 5.45233 9.49071 7.02491 7.55084 7.02491C5.61096 7.02491 4.03838 5.45233 4.03838 3.51246Z"
              className=" fill-base-100 group-hover:fill-Navbar-Hover"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.187 10.4041C3.27318 9.24363 5.03971 8.37012 7.75042 8.37012C10.4611 8.37012 12.2277 9.24363 13.3138 10.4041C14.3864 11.5499 14.7504 12.9281 14.7504 13.8755C14.7504 14.1644 14.5162 14.3986 14.2273 14.3986H1.27355C0.984634 14.3986 0.75042 14.1644 0.75042 13.8755C0.75042 12.9281 1.11449 11.5499 2.187 10.4041ZM1.84117 13.3523H13.6597C13.5508 12.6808 13.2289 11.8444 12.55 11.1191C11.6931 10.2036 10.2212 9.41638 7.75042 9.41638C5.27964 9.41638 3.80773 10.2036 2.95085 11.1191C2.27198 11.8444 1.95003 12.6808 1.84117 13.3523Z"
              className=" fill-base-100 group-hover:fill-Navbar-Hover"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_627_1060"
              x="-3.24958"
              y="0"
              width="22"
              height="22.3987"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_627_1060"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_627_1060"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <p className="rounded px-2 text-[12px] font-semibold text-base-100 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:dark:hover:bg-transparent group-hover:md:dark:text-Navbar-Hover">
          Profile
        </p>
      </Link>
    </div>
  );
}

export default ProfileIcon;

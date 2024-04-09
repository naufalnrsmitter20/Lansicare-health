"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function Headers(state: any) {
  return (
    <>
      <React.Fragment>
        <div className=" ml-9">
          <h5 className=" font-inter text-xl font-bold text-cyanBlue">
            Admin Panel
          </h5>
          <h1 className=" mt-6 font-inter text-4xl font-bold text-black dark:text-white">
            {state.name}
          </h1>
        </div>
      </React.Fragment>
    </>
  );
}

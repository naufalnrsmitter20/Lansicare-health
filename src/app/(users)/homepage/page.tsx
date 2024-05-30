import React from "react";
import Homepage from "../component/HomePage";
import { useSession } from "next-auth/react";
import Carousel from "../component/Carousel";

export default function HomepagePages() {
  return (
    <>
      <div className="bg-base-50">
        <Carousel />
        <Homepage />
      </div>
    </>
  );
}

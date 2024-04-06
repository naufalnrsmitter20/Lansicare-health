"use client";
import React from "react";
import Homepage from "../component/HomePage";
import { useSession } from "next-auth/react";
import Carousel from "../component/Carousel";

export default function HomepagePages() {
  const { data: session } = useSession();

  return (
    <>
      <div className="">
        <Carousel />
        <Homepage />
      </div>
    </>
  );
}

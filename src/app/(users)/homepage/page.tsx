"use client";
import React from "react";
import Homepage from "../component/HomePage";
import { useSession } from "next-auth/react";

export default function HomepagePages() {
  const { data: session } = useSession();

  return (
    <>
      <Homepage />
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DangerButton } from "../utilities/Buttons";

export default function RemovePatient({ _id }: { _id: any }) {
  const router = useRouter();
  const removePatient = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/topics?_id=${_id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        window.location.reload();
      }
    }
  };
  return (
    <DangerButton onClick={removePatient} type="button">
      Delete
    </DangerButton>
  );
}
// `http://localhost:3000/api/topics?id=${_id}`
